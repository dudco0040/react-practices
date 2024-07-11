ex02: 전통적인 DOM기반 기반의 Application: 단순한 파일 분리

1. 복잡한 애플리케이션은 코드를 분리해서 개발하는 것이 원칙이다.
2. 전통적인 분리 방식의 애플리케이션 문제점
    - 브라우저는 분리되어 있는 JS 파일들의 로딩 순서를 보장하지 않는다.
    - 복잡해지고 분리 JS 파일들이 많아지면 의존성 관리 자체가 불가능 하다.



== [실습] ===============================================

<1> 프로젝트 만들기
$ mkdir ex02
$ cd ex02
$ npm init -y 


<2> Test Server(Dev. Server)
1. express 설치
$ npm i -D express 

2. dev-server.js

3. NPM scripting : package.json
"scripts": {
    "test": "node dev-server"
}

4. Landing Page
public/index.html


<3> Writing Application
1. public/index.js
2. public/App.js


<4> Test
$ npm run test
