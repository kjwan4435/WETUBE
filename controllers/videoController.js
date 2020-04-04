import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

// global
export const home = async(req,res) => {
    try{
        const videos = await Video.find({});
        res.render("home", { pageTitle: "home", videos});
    } catch(error){
        console.log(error);
        res.render("home", { pageTitle: "home", videos: [] });
    }
};
export const search = (req,res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "search", searchingBy });
};

// video
export const videos = (req,res) => res.render("videos", { pageTitle: "videos"});
export const getUpload = (req,res) => res.render("upload", { pageTitle: "upload"});
export const postUpload = async(req,res) => {
    const {
        body: { title, description},
        file: { path}
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    })
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};
export const editVideo = (req,res) => res.render("editVideo", { pageTitle: "editVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo", { pageTitle: "deleteVideo"});
export const videoDetail = (req,res) => res.render("videoDetail", { pageTitle: "videoDetail"});