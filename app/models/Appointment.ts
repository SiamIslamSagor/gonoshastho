import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  // Patient Info
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
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  reference: {
    type: String,
  },

  // Medical History
  symptoms: {
    type: String,
    required: [true, "Symptoms are required"],
  },
  previousTreatments: {
    type: String,
  },
  currentMedications: {
    type: String,
  },
  allergies: {
    type: String,
  },
  documentUrls: [
    {
      type: String,
    },
  ],

  // Location Info
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  specificLocation: {
    type: String,
    required: [true, "Specific location is required"],
  },
  availableDays: [
    {
      type: String,
      required: [true, "Available days are required"],
    },
  ],

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
