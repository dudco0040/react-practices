import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        // this.value = this.props.begin;
        // this.step = this.props.step;
        this.state = {  
            //상태를 초기화
            val1: this.props.begin,
            val2: 20,
            val3: 30
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    // Anti-Pattern
                    // this.value += this.step;
                    // console.log(this.value);
                    // this.render();

                    this.setState({
                        val1: this.state.val1 + this.props.step
                    }) // 값 전체를 세팅하지 않고 변경할 변수만 세팅
                
                }}>
                    <strong>
                        {'+'}
                    </strong>
                </button>
                {' '}
                <span>
                {
                    /* this.value */
                    this.state.val1
                }
                </span>
            </div>
        );
    }
}