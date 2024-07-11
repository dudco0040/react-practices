ex06: React JSX 기반의 Application Refactoring

React API 기반에서 JSX 기반의 Application으로 리팩토링 하기


== [실습] ===============================================

<1> Init Project
$ mkdir ex05
$ cd ex05
$ npm init -y 


<2> Install Packages
1. 개발툴
$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react

2. React 라이브러리
$ npm i react react-dom


<3> NPM scripting : package.json
"scripts": {
    "start": "npx webpack serve  --progress",
    "build": "npx webpack"
} 


<4> Configuration
1. webpack.config.js
    1) Babel Loader 설정 추가
        
        rules:[{
            test: /\.js/i,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]

2. babel.config.json
    1) ES6: Preset Env

        ["@babel/preset-env", {
            "targets": {
                "ie": 11,
                "edge": "126",
                "firefox": "127",
                "chrome": "126",
                "opera": "98",
                "safari": "17"
            }
        }]  

    2) JSX: Preset React

        "@babel/preset-react"


<5> Landing Page
public/index.html 


<6> Writing Application with JSX
1. src/index.js
2. src/App.js


<7> Test
$ npm start


<8> Build(Bundling)
$ npm run build