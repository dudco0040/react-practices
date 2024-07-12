import React from 'react';
import {PropTypes} from 'prop-types';

function MyComponent({props01, props02, props03, props04, props05, props06, props07, props08, props09}) {
    return (
        <div>
            <h2>Property Validation</h2>

            <span>props01: {typeof(props01) !== 'undefind' ? props01: '--not set--'}</span>
            <br/>
            <span>props02: {typeof(props02) !== 'undefind' ? props02: '--not set--'}</span>
            <br/>
            <span>props03: {typeof(props03) !== 'undefined' ? `${props03}` : '-- not set --'}</span>
            <br/>
            <span>props04: {typeof(props04) !== 'undefind' ? props04.name: '--not set--'}</span>
            <br/>
            <span>props05: {typeof(props05) !== 'undefind' ? props05.map((e,i) => <b key={i}>{e}</b>): '--not set--'}</span>
            <br/>
            <span>props06: {typeof(props06) !== 'undefind' ? props06() : '--not set--'}</span>
            <br/>
            <span>props07: {typeof(props07) !== 'undefind' ? props07 : '--not set--'}</span>
            <br/>
            <span>props08: {typeof(props08) !== 'undefind' ? props08.map((e,i) => <b key={i}>{e}</b>) : '--not set--'}</span>
            <br/>
            <span>props09:   
                { /* 조건부 랜더링 */
                    typeof(props09) !== 'undefind' ? 
                    <div>
                        <h3>{props09.no}</h3>
                        <h4>{props09.name}</h4>
                        <h5>{props09.email}</h5>
                    </div>
                    :
                    <strong>
                        {'--not set--'}
                    </strong>
                }
            </span>
            <br/>
        </div>
    );
}

MyComponent.propTypes  = {
    /* JavaScript Data Type */
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

    /* Combination */
    props07: PropTypes.oneOfType(PropTypes.string, PropTypes.number),  /* 둘 중 하나 */
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
    props09: PropTypes.shape({              /* 객체 안의 값을 검증 */
        no: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
}

/* Default Value 설정! 값을 안 넣으면 .. 'undefind' 조건을 쓰지 않을 때 */
MyComponent.defaultProps = {
    props02: 0,
    props03: false,
    props04: {},
    props05: [],
    props06: () => {} /*더미함수*/
}

export default MyComponent;