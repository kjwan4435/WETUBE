import express from "express";
import routes from "../routes";
import { login } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, login);

export default userRouter;