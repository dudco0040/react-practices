import React from 'react';
import Header from './Header';
// import './assets/scss/App.scss';
import styled from 'styled-components';

const StyleDiv = styled.div`
  text-align: center;
`;

function App() {
    return (
        <StyleDiv id={'App'}>
           <Header />
        </StyleDiv>
    );
}

export default App;