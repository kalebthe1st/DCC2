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
    res.status(404).json({ success: false, message: "Failed to find doctor" });
  }
};
