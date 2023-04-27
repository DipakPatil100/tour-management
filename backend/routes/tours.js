import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create new tour
router.post("/", verifyAdmin, createTour);

// Update Tour
router.put("/:id", verifyAdmin, updateTour);

// Delete Tour
router.delete("/:id", verifyAdmin, deleteTour);

// Get Single Tour
router.get("/:id", getSingleTour);

// Get All Tours
router.get("/", getAllTour);

// Get Tour by Search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
