import express from "express";
import routes from "../routes";
import {
    videoDetail,
    deleteVideo,
    getUpload,
    postUpload,
    getEditVideo,
    postEditVideo,
} from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

// Upoad Video
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

// routes.~~~()에서 () 하는 여부에따라 string으로 읽을 지 함수로 읽을 지 정할 수 있다.

export default videoRouter;
