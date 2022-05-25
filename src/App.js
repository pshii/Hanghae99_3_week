import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import styledComponents from 'styled-components';
import Home from './Home';
import Detail from './Detail';

function App() {

  return (
    <div className="App">
      <WrapStyle className='wrap'>
        <ContainerStyle className='Container'>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/Detail/:day_name"  >
            <Detail/>
          </Route>
        </ContainerStyle>
      </WrapStyle>
    </div>
  );
}

const WrapStyle = styledComponents.div`
  display : flex;
`;
const ContainerStyle = styledComponents.div`
  width : 500px;
  height : 70vh;
  border:1px solid black;
  border-radius: 5px;
  position : absolute;
  top :50%;
  left:50%;
  transform:translate(-50%,-50%);
  padding : 30px;
  
`;





export default App;
