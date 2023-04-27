import User from "../models/User.js";

// create new User (C)
export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again!",
    });
  }
};

// Update User (U)
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json({
      success: true,
      message: " Succesfully Updated",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// Delete User (D)
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(201).json({
      success: true,
      message: " Succesfully Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
    });
  }
};

// Get Single User (R)
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const User = await User.findById(id);

    res.status(200).json({
      success: true,
      message: " Succesfully get single pro",
      data: User,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// Get All User (R)
export const getAllUser = async (req, res) => {
  try {
    const Users = await User.find({});
    res.status(200).json({
      success: true,
      message: "Succesfully get all data",
      data: Users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
