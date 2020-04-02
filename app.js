import express from "express"; //const express = require('express');
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"; 
import { userRouter } from "./router"; // userRouter가 default로 export 되지 않았으므로 {}를 붙여줄 것.

const app = express();

const handleHome = (req,res) => res.send("Hello, world!");
const handleProfile = (req,res) => res.send("Hello, Profiler!");
// function handleProfile(req,res){ res.send("Hello, Profiler!")}
const betweenHome = (req,res,next) => {
    console.log("between");
    next();
};

app.use(cookieParser()); // user 정보를 쿠키에 저장하기 위함
app.use(bodyParser.json()); // 서버에 저장된 것들을 받아오기 위함. 
app.use(bodyParser.urlencoded({ extended: true})); // (우리가 서버에 어떤 형식을 전송하는 지 알려주어야 함) urlencoded - normal html
app.use(helmet()); // for security 
app.use(morgan("dev")); // for logging

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;