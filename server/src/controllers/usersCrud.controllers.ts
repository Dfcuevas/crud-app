import { Request, Response } from "express";
import User from "../models/user.model.js";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, username, email, city, phone } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({
      name,
      username,
      email,
      city,
      phone,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error: any) {
    console.log("Error creating user", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { username, email, city, phone, name } = req.body;
    const userId = req.params.userId;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.username = username || user.username;
    user.email = email || user.email;
    user.city = city || user.city;
    user.phone = phone || user.phone;
    user = await user.save();

    return res.status(200).json(user);
  } catch (error: any) {
    console.log("Error updating user", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).json(user);
  } catch (error: any) {
    console.log("Error deleting user", error.message);
  }
};
