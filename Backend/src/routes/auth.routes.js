import { Router } from "express";
import { registerValidator } from "../middlewares/validation.middleware.js";
import {
  getMe,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = Router();

/* 
    POST /api/auth/register
*/

router.post("/register", registerValidator, register);

/* 
    POST /api/auth/login
*/

router.post("/login", login);

/* 
    POST /api/auth/logout
*/

router.post("/logout", logout);

/*
    GET /api/auth/get-me
*/

router.get("/get-me", authUser, getMe);

export default router;
