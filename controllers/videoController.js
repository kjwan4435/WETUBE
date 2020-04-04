import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

// global
export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1 });
        res.render("home", { pageTitle: "home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "home", videos: [] });
    }
};
export const search = (req, res) => {
    const {
        query: { term: searchingBy },
    } = req;
    res.render("search", { pageTitle: "search", searchingBy, videos });
};

// video
export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "upload" });
export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path },
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description,
    });
    res.redirect(routes.videoDetail(newVideo.id));
};

//get과 post를 같이 적는 이유는, get은 순수 html페이지를 로딩하기 위함. post는 포스팅을 하기 위함이다.
export const getEditVideo = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: "editVideo", video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};
export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { description, title },
    } = req;
    try {
        const video = await Video.findOneAndUpdate(
            { _id: id }, // object condition
            { title, description } // object data
        );
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const videoDetail = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", { pageTitle: "videoDetail", video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const deleteVideo = async (req, res) => {
    const {
        params: { id },
    } = req;
    try {
        await Video.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
};
