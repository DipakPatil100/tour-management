import Tour from "../models/Tour.js";

// create new tour (C)
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again!",
    });
  }
};

// Update Tour (U)
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json({
      success: true,
      message: " Succesfully Updated",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// Delete Tour (D)
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);

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

// Get Single Tour (R)
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: " Succesfully get single pro",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// Get All Tour (R)
export const getAllTour = async (req, res) => {
  try {
    const tours = await Tour.find().populate("reviews");
    res.status(200).json({
      success: true,
      message: "Succesfully get all data",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// Get Tour by Search
export const getTourBySearch = async (req, res) => {
  // here i means caseSensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  // console.log(req.query);
  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Success",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// Get Featured Tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Succesful",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// Get Tour Count
export const getTourCount = async (req, res) => {
  try {
    // estimatedDocumentCount() method gives number of documents present in DB
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "failed to fetch",
    });
  }
};
