import React from 'react';

function Contents(props) {
    /*
        comment01: JSX 밖은 JavaScript 구문(주석문)이 가능하다.
    */
    return (
        <div
            /*
                comment02: JSX 엘리멘트 태그 안에 주석이 가능하다. (비추)
            */
            className='Clock'
            title='시계'>
            {/*
                comment03: 이런 방식으로 표현식이 실행되는 블록 안에서 주석을 단다(추천)
            */}
            <p>ex07: Comment</p>
            {/*
                JSX는 HTML이 아니다!!!!!
                따라서 <!-- --> HTML 주석은 사용할 수 없다.
            */}
            // comment04: JSX 안에서 javascript 주석 구문(/**/ 포함)을 사용하면 그대로 출력된다. (주의)
            <div>{'00:00:00'}</div>
        </div>
    );
}

export default Contents;