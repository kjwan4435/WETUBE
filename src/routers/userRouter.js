import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    changePassword,
    editProfile,
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

export default userRouter;
