ex01: 특징I HTML과의 차이점

1. 속성은 Camel Case
2. Element 꼭 닫는다.
3. JSX Element의 속성 이름은 DOM API와 일치한다.


== [실습] ===============================================

<1> Init Project
$ mkdir ex01
$ cd ex01
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
1. babel.config.json
2. webpack.config.js


<5> Landing Page
public/index.html


<6> Writing Application
1. src/index.js
2. src/App.js


<7> Test
$ npm start


<8> Build(Bundling)
$ npm run build