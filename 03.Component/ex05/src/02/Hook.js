import React, {useState, useEffect} from 'react';

export default function Hook({ color }) {
    const [backgroundColor, setBackground] = useState(null);
    const [text, setText] = 
    
    /* 1. Alternative 01 */
    if(color !== backgroundColor) {
        setBackgourndColor(color);
    }

    /* 
    * 2. After Rendering
    * class component(componentDidUpdat, componentDidMount) 
    * 대체라기 보단 비슷하다 
    */
    useEffect(() => console.log('After Rending:update text or update backgroundColor'));

    /** 
     * 3. After Rendering
     * 어떤 상태의 변화에 반응하는함수 
     */
    useEffect(() => {
        console.log('After Rending: update text');
        }, [text]);
    
    /**
     * 4. Alternative02: componentDidMount & componentWillUnmount
     */
    useEffect(() => {
        console.log("After Mount(componentDidMount)");
        return () => {
            console.log("After Unmount(componentWillUnmount)")
        }
    }, []);

    return (
        <>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: color
                } } />
            <input
                type='text'value={text} />
        </>
    );
}