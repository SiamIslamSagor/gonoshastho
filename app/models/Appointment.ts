import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  // Patient Info (from PatientInfo.tsx)
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  age: {
    type: String,
    required: [true, "Age is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["male", "female", "other"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^01[3-9]\d{8}$/, "Please enter a valid Bangladeshi phone number"],
  },
  email: {
    type: String,
    match: [
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please enter a valid email",
    ],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  reference: {
    type: String,
  },

  // Medical History (from MedicalHistory.tsx)
  symptoms: {
    type: String,
  },
  documentUrls: [
    {
      type: String,
    },
  ],

  // Location Info (from LocationSelection.tsx)
  location: {
    type: String,
    required: [true, "Location is required"],
    enum: ["ঢাকা", "হবিগঞ্জ"],
  },
  selectedDate: {
    type: Date,
    required: [true, "Appointment date is required"],
  },
  serialNumber: {
    type: Number,
    required: [true, "Serial number is required"],
  },

  // Appointment Status
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled", "completed"],
    default: "pending",
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt timestamp before saving
appointmentSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);

export default Appointment;
