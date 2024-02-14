import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      message: "updated Successfully",
      success: true,
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id, { $set: req.body }, { new: true });

    res.status(200).json({
      message: "Deleted Successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      message: "Found user",
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Failed to find user" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.status(200).json({
      message: "Found users",
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Failed to find users" });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { password, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "Profile info is getting",
      data: { ...rest },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong cannot get " });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    // step1 retrieve appointments from booking for specific user
    const bookings = await Booking.find({ user: req.userId });
    // step2 extract bussines Ids from appointment bookings
    const doctorIds = bookings.map((el) => el.doctor.id);
    // step3 retrieve bussiness using bussiness id
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Appointments are getting ",
        data: doctors,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong cannot get " });
  }
};
