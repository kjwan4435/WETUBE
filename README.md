# WETUBE

Clone coding of YOUTUBE with Vanilla and Node JS


npm init // package.json 파일 생성
npm install express // express 설치

// babelrc는 최신버전(ES6)의 javascript를 구 브라우저에서 인식할 수 있도록 옛날 버전으로 바꿔주는 역할. 
npm install @babel/node // babel 설치
npm install @babel/preset-env // env 설치 (최신이지만 그렇게 실험적이진 않음)

npm install nodemon -D // nodemon과 같은 프로젝트에 영향은 주지 않지만 개발자에게 필요한 모듈 설치 시 -D

app.use(betweenHome);
app.get("/", betweenHome, handleHome);
// 미들웨어는 단지 함수이다.
// 미들웨어를 활용하여 최종으로 req로 가기 전에 무언가를 할 수 있음 user 로그인 상태 체크라던지 파일 가로채기라던지?
// 미들웨어에서 res 응답을 보내면 라우터까지 가지 않고 중간에 연결을 끊을 수 있음.

morgan: 미들웨어 라이브러리
logging: 무슨일이 어디서 일어났는지

MVC structure
M data
V how does the data look
C function that looks for the data


const express = require('express');
// require은 모듈을 가져온다. 현재 위치 디렉토리에서 찾고 없으면 node_modules 폴더에서 찾아온다.

function handleHome(req,res){
    res.send("Hello, world!");
    // res를 통해서 서버에 응답을 보낸다.
    // 나중에 포스트를 할 때나 req를 통해서 전송한다.
}