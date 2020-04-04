import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required",
    },
    title: {
        type: String,
        required: "Title is required",
    },
    description: String,
    views: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId, //comment의 ID가 저장되는 형태
            ref: "Comment",
        },
    ],
});

const model = mongoose.model("Video", VideoSchema); //(modelname, SCHEMA)
export default model;
