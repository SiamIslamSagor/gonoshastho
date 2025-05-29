import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Appointment from "@/app/models/Appointment";
import { startOfDay, endOfDay } from "date-fns";

export async function POST(request: Request) {
  try {
    console.log("1. Starting appointment creation process...");

    // Check database connection string
    if (!process.env.MONGODB_URI) {
      console.error("MONGODB_URI is not defined in environment variables");
      throw new Error("Database configuration is missing");
    }
    console.log("2. Database URI found, connecting to database...");

    await connectDB();
    console.log("3. Database connection successful");

    console.log("4. Parsing request body...");
    const body = await request.json();
    console.log("5. Request body received:", JSON.stringify(body, null, 2));

    // Validate required fields
    console.log("6. Validating required fields...");
    const requiredFields = [
      "name",
      "age",
      "gender",
      "phone",
      "address",
      "location",
      "selectedDate",
    ];
    const missingFields = requiredFields.filter(field => !body[field]);
    if (missingFields.length > 0) {
      console.log("7. Missing required fields:", missingFields);
      return NextResponse.json(
        { message: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }
    console.log("7. All required fields are present");

    // Calculate serial number based on location and date
    console.log("8. Calculating appointment date range...");
    const appointmentDate = new Date(body.selectedDate);
    const startOfAppointmentDay = startOfDay(appointmentDate);
    const endOfAppointmentDay = endOfDay(appointmentDate);
    console.log("9. Date range calculated:", {
      appointmentDate: appointmentDate.toISOString(),
      startOfDay: startOfAppointmentDay.toISOString(),
      endOfDay: endOfAppointmentDay.toISOString(),
    });

    // Count existing appointments for the same location and date
    console.log(
      "10. Counting existing appointments for location:",
      body.location
    );
    const existingAppointmentsCount = await Appointment.countDocuments({
      location: body.location,
      selectedDate: {
        $gte: startOfAppointmentDay,
        $lte: endOfAppointmentDay,
      },
    });
    console.log("11. Found existing appointments:", existingAppointmentsCount);

    // Assign serial number (increment by 1 from the count)
    const serialNumber = existingAppointmentsCount + 1;
    console.log("12. Assigned serial number:", serialNumber);

    // Create appointment with serial number
    const appointmentData = {
      ...body,
      serialNumber,
      status: "pending",
    };
    console.log("13. Creating new appointment with data:", appointmentData);

    // Create appointment
    const appointment = await Appointment.create(appointmentData);
    console.log("14. Raw appointment data:", appointment);

    // Fetch the created appointment to verify
    const savedAppointment = await Appointment.findById(appointment._id).lean();
    console.log("15. Saved appointment data:", savedAppointment);

    if (!savedAppointment) {
      throw new Error("Failed to create appointment");
    }

    return NextResponse.json(savedAppointment, { status: 201 });
  } catch (error) {
    console.error("16. Error in appointment creation:", error);
    return NextResponse.json(
      { message: "Error creating appointment", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    return NextResponse.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(
      { message: "Error fetching appointments" },
      { status: 500 }
    );
  }
}
