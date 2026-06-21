import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../config/server.config.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "username, password and email are required" });
  }

  try {
    const isUserAlreadyExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserAlreadyExist) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username: username,
      password: hashedPassword,
      email: email,
    });

    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res
      .status(201)
      .json({ message: "User registered successfully", user });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  const { username, email, password } = req.body;

  if ((!username && !email) || !password) {
    return res
      .status(400)
      .json({ message: "Username or email and password are required" });
  }

  try {
    const user = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res
      .status(200)
      .json({ message: "User logged in successfully", user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successfully" });
};

export const getMe = async (req, res) => {
  res.status(200).json({ success: true, user: req.user });
};
