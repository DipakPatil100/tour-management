import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Update User
router.put("/:id", verifyUser, updateUser); //middleware

// Delete User
router.delete("/:id", verifyUser, deleteUser); //middleware

// Get Single User
router.get("/:id", verifyUser, getSingleUser); //middleware

// Get All  User
router.get("/", verifyAdmin, getAllUser); //middleware

export default router;
