# WETUBE

Clone coding of YOUTUBE with Vanilla and Node JS

```
npm init // package.json 파일 생성
npm install express // express 설치

// babelrc는 최신버전(ES6)의 javascript를 구 브라우저에서 인식할 수 있도록 옛날 버전으로 바꿔주는 역할.

npm은 패키지를 설치하는 것이다.
npm install @babel/cli
npm install @babel/node // babel 설치
npm install @babel/preset-env // env 설치 (최신이지만 그렇게 실험적이진 않음)
npm install nodemon -D // js의 수정 감지 nodemon과 같은 프로젝트에 영향은 주지 않지만 개발자에게 필요한 모듈 설치 시 -D
npm install pug // HTML을 멋지게 보이게 만들어줌
npm install dotenv // 보안용 내 URL에서 user의 데이터를 숨길 때 사용
npm install multer // file을 업로드하면 url을 반환하는 미들웨어
npm install eslint -g // global로 설치함
eslint --init  //
npm install eslint-config-prettier // prettier는 지적하지 않아
npm add eslint-config-prettier

npm install webpack webpack-cli // 웹팩을 코드와 터미널에 설치
npm install extract-text-webpack-plugin@next  // 웹팩의 beta버전 설치
// 1. SCSS를 CSS로 바꾼다.
// 2. 특정 플러그인들을 css에 대해서 실행시켜준다
// 3. CSS를 가져와준다.
// webpack은 config파일에서 bottom에서 top으로 실행한다.
npm install sass-loader postcss-loader css-loader
npm install autoprefixer
npm install node-sass
npm install babel-loader
npm install @babel/polyfill  //  js와 브라우저 간의 갭을 메꿔줌
npm install passport-local-mongoose // 유저 인증 / 패스워드 설정 및 확인을 도와준다
npm install passport passport-local // 로컬 로그인
npm install express-session  // 세션에 유저 정보 저장
npm i connect-mongo // 세션 정보를 데이터베이스에 저장하기

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

export default는 파일을 통째로 export시킨다.
export는 변수별로 export시킨다.

=> : 암시적으로 return.

 #{new Date().getFullYear() } : pug에서 자바스크립트 호출할 때 이렇게 쓰면 된다.

 locals에 로컬 변수를 저장하면, 이 변수들을 템플릿에서 사용 가능하다.

 res.render("템플릿","템플릿에 넘길 정보")

 async/await: JS야, 어떤 부분은 꼭 기다렸다가 실행해야 해.

 enctype: form tag에서 post방식의 method에서 데이터 인코딩하는 방식을 명시
 enctype="multipart/form-data": 파일이나 이미지 업로드시 사용할 것.

 req.params와 query의 차이
req.params는 예약된 값이라고 했다. routing을 보면 id와 name이 예약되어 있음을 알고있다. 즉 서버에서 id라는 변수로 어떤 값이 들어올 것을 알고, name이라는 변수에 어떤 값이 들어올 것임을 알고 대기하고 있다. req.params는 url을 분석하여 id와 name자리에 있는 값을 낚아챈다.
req.query는 url에서 ?뒤에 입력되는 query문을 req.query로 받아오는 것이다.

===========DEPLOYMENT==============

 brew install heroku/brew/heroku
 heroku login
 heroku create
 git push heroku master

 heroku logs --tail // error보기


```
