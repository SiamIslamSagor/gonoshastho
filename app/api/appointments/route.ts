import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Appointment from "@/app/models/Appointment";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const appointment = await Appointment.create(body);

    return NextResponse.json(
      {
        message: "Appointment created successfully",
        appointment,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error creating appointment",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const appointments = await Appointment.find({}).sort({ createdAt: -1 });

    return NextResponse.json(appointments);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error fetching appointments",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
