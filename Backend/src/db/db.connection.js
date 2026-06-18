import mongoose from "mongoose";
import config from "../config/server.config.js";

const connectionDB = async () => {
  await mongoose.connect(config.MONGO_URI);
  console.log(`DB connected successfully...`);
};

export default connectionDB;
