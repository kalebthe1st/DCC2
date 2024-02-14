import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      message: "updated Successfully",
      success: true,
      data: updatedDoctor,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id, { $set: req.body }, { new: true });

    res.status(200).json({
      message: "Deleted Successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      message: "Found Doctor",
      success: true,
      data: doctor,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Failed to find doctor" });
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;

    let docotors;

    if (query) {
      docotors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $option: "i" } },
          { specialization: { $regex: query, $option: "i" } },
        ],
      }).select("-password");
    } else {
      docotors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      message: "Found users",
      success: true,
      data: docotors,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not Found" });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;

  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({doctor:doctorId})

    res.status(200).json({
      success: true,
      message: "Profile info is getting",
      data: { ...rest, appointments },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong cannot get " });
  }
};
