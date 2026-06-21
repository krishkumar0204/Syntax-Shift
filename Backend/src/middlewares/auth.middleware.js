import jwt from "jsonwebtoken";
import config from "../config/server.config.js";
import userModel from "../models/user.model.js";

export const authUser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);

    req.user = await userModel.findById(decoded.id);

    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
