import React, {useState} from 'react';
import Incrementor01 from './Incrementor01';

function Incrementor02({begin, step}) {
    const [val, setVal] = useState(begin);  // 상태 변수가 있으면 그 값을 적용 
    
    return (
        <div>
            <button onClick={() => {  // 클릭 이벤트 시, 값을 업데이트
                setVal(val+step);
            }}>
                <strong>
                    {'+'}
                </strong>
            </button>
            {' '}
            <span>
                {val}
            </span>
        </div>
    );
}

export default Incrementor02;