import express from "express"; // const express = require('express');
// ===== middleware =======/
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import path from "path";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
// ===== Router =======/
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter"; // userRouter가 default로 export 되지 않았으므로 {}를 붙여줄 것.
import videoRouter from "./routers/videoRouter";

import "./passport";
import { Mongoose } from "mongoose";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet()); // for security
app.set("view engine", "pug"); // set은 앱의 설정, view engine의 default는 undefined임. expressjs 공식문서 볼 것.
app.set("views", path.join(__dirname, "views")); // 현재 디렉토리 수정
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // directory에 파일을 전달하는 새로운 middleware function.
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser()); // user 정보를 쿠키에 저장하기 위함, 쿠키를 전달받아서 사용할 수 있도록 해줌.(ex 사용자 인증)
app.use(bodyParser.json()); // 서버에 저장된 것들을 받아오기 위함. 사용자가 웹사이트로 전달하는 정보들을 검사
app.use(bodyParser.urlencoded({ extended: true })); // (우리가 서버에 어떤 형식을 전송하는 지 알려주어야 함) urlencoded - normal html
app.use(morgan("dev")); // for logging
app.use(
    session({
        secret: process.env.COOKIE_SECREET,
        resave: true,
        saveUninitialized: false,
        store: new CookieStore({ mongooseConnection: mongoose.connection }),
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware); // local 변수에 접근하기 위한 전역함수.

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // get이 아니라 use의 의미는 누군가 /user로 접근하면 whold userRouter 를 쓰겠다!
app.use(routes.videos, videoRouter);

export default app;
