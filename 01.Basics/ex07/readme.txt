ex07: ex00.cra Recofiguration (DIY)

create-react-app 사용하지 말고 '리액트 스타트앱' 직접 설정하고 구성하기  



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
1. babel.config.json
2. webpack.config.js


<5> Landing Page
public/*


<6> Writing Application
src/*


<7> Test
$ npm start


<8> Build(Bundling)
$ npm run build