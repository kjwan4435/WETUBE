const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ["@babel/polyfill", ENTRY_FILE], // @babel/polyfill: js와 브라우저 간의 갭을 메꿔줌
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.(scss)$/, // scss 파일을 가져옴
                // 1. SCSS를 CSS로 바꾼다.
                // 2. 특정 플러그인들을 css에 대해서 실행시켜준다
                // 3. CSS를 가져와준다.
                // webpack은 config파일에서 bottom에서 top으로 실행한다.
                use: ExtractCSS.extract([
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins() {
                                return [
                                    autoprefixer({ browsers: "cover 99.5%" }),
                                ];
                            },
                        },
                    },
                    { loader: "sass-loader" },
                ]),
            },
        ],
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js",
    },
    plugins: [new ExtractCSS("styles.css")],
};

module.exports = config;
