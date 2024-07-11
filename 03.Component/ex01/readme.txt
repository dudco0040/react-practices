ex01: Component 작성 및 Property

1. 컴포넌트의 데이터
2. 부모가 소유한 데이터 
3. 부모에서 자식으로 전달된다.
4. 자식에서 변경 불가
5. 컴포넌트 통신(Data Flow)
   Top -> DownProperty


== 실습 ==================

src/01: 함수 컴포넌트의 property
src/02: Data Flow
src/03: 클래스 컴포넌트의 property
src/04: Property Validation : [package 추가] $ npm i prop-types


1. 스트립팅
"scripts": {
    "start": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npm install && npx webpack --config config/webpack.config.js --mode production"
}

2. 테스트
$ npm start src=(01|02|03|04)