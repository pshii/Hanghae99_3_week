import React, { useReducer, useRef } from "react";
import styledComponents from "styled-components";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createScore } from "./redux/modules/score";
const Detail = (props) => {
  const dispatch = useDispatch();
  const { day_name } = useParams();
  const history = useHistory();
  const [clicked, setClicked] = useState(0);
  return (
    <>
      <WrapListStyle className='wrap-list'>
        <h1><span style={{
          color: "rgb(255, 255, 255)",
          fontWeight: "900",
          fontSize: "30px",
          background: "orange",
          padding: "0.2rem",
          borderRadius: "5px",
        }}>{day_name}요일</span> 평점 남기기</h1>
        <Box>
          {Array.from({ length: 5 }, (v, i) => {
            return (
              <StarStyle key={i}
                 className= {clicked >= i+1? 'red' : 'gray'}
                onClick={() => {
                  setClicked(i+1)
                }}
              >
              </StarStyle>
            );
          })}
        </Box>

        <ButtonStyle onClick={() => {
          history.goBack();
          dispatch(createScore(clicked,day_name))
        }}>평점 남기기</ButtonStyle>
      </WrapListStyle >

    </>
  );
};
const Box = styledComponents.div`
display:flex;
margin-left:20px;
  .red {
    background-color:red;
    opacity:1;
  }
`;
const StarStyle = styledComponents.div`
    height: 20px;
    margin : 0 20px;
    border-radius:20px;
    padding:10px;
    background-color: #dfdfdf;
     margin : 10px;
     width:10px;
`;
const WrapListStyle = styledComponents.div`
  border:1px solid red;
  width : 300px;
  margin : 50px auto;
`;

const ButtonStyle = styledComponents.button`
    width: 200px;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: rgb(255, 255, 255);
    cursor : pointer;
`;
export default Detail;