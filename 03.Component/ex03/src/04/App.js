import React, {useRef} from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {

    const imgRef = useRef(null);   // refer 생성 

    // 키보드의 키  값 알고 싶을 때
    const onKeyPress=(event)=>{
        if(event.key === 'Enter'){
            console.log(event.target.value);
        }
    };

    // 내용이 변했을 때  
    const onChangeInput=(e)=>{
        console.log('-----'+ e.target.value);
    }

    // input에 클릭 했을 때
    const onFocusInput=()=>{
        console.log('Focuse')
    }

    // input 아닌 영역에 클릭
    const onBlurInput=()=>{
        console.log('Blur')
    }

    // img 위에 마우스 올렸을 때 좌표 1번만
    const onMouseOverInput=(e)=>{
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;

        // console.log("imge mouse over", `x=${e.clientX}, y=${e.clientY}`);
        console.log("imge mouse over", `x=${e.clientX-offsetLeft}, y=${e.clientY-offsetTop}`);
    }

    // img 위에서 마우스 움직이는 좌표 계속
    const onMouseMoveInput=(e)=>{
        console.log("imge mouse move", `x=${e.clientX}, y=${e.clientY}`)
    }
    
    // img 마우스 아웃 되었을 때 좌표 1번
    const onMouseOutInput=(e)=>{
        console.log("img mouse out", `x=${e.clientX}, y=${e.clientY}`)
    }

    // 클릭 손 뗐을 때
    const onMouseUpInput=(e)=>{
        console.log("onMouseUp",`x=${e.clientX} y=${e.clientY}`)
    }

    // 클릭 눌렀을 떄
    const onMouseDownInput=(e)=>{
        console.log("onMouseDown",`x=${e.clientX} y=${e.clientY}`)
    }

    const onClickInput=(e)=>{
        console.log("img mouse click", `x=${e.clientX}, y=${e.clientY}`)
    }

    const onDoubleClickInput=(e)=>{
        console.log("img mouse doubleclick", `x=${e.clientX}, y=${e.clientY}`)
    }
    return (
        <>
            <h2>Event Handler  예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요' 
                onKeyPress={onKeyPress}
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
                />
                <br/>
                <br/>
            <img
                ref={imgRef}
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={logo} 
                onMouseOver={onMouseOverInput}
                onMouseMove={onMouseMoveInput}
                onMouseOut={onMouseOutInput}
                onMouseUp={onMouseUpInput}
                onMouseDown={onMouseDownInput}
                onClick={onClickInput}
                onDoubleClick={onDoubleClickInput}
                />
        </>
    );
}