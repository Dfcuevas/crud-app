import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersCrud.controllers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/create", createUser);
router.put("/update/:userId", updateUser);
router.delete("/delete/:userId", deleteUser);

export default router;
