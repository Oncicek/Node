import express from "express";
import { notFoundHandler } from "../controllers/404.js";

export const router = express.Router();

router.use("/", notFoundHandler);
