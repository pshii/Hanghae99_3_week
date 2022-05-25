import React, { useState } from "react";
import styledComponents from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { keyframes } from "styled-components";
const Home = (props) => {
    const data = useSelector((state)=>state)
    console.log(data.score.day_score);
    const history = useHistory();
    const day_dict = {
        0: "일", 1: "월", 2: "화", 3: "수", 4: "목", 5: "금", 6: "토",
    };
    const week_days = Object.keys(day_dict).map((v, i) => {
        let today = new Date().getDay();
        let num = today + parseInt(v) > 6 ? today + parseInt(v) - 7 : today + parseInt(v);
        return day_dict[num];
    })
    let sum=0;
    const week_score = week_days.map((v, i) => {
        const random = (Math.ceil(Math.random() * 5)-1);
        sum += random;
        return {
            day: v,
            score: random,
        }
    })
    
    
    const scoreAvg = (sum / week_score.length).toFixed(1);
    const [avg,setAvg] = useState(scoreAvg)

    return (
        <div>
            <h1>내 일주일은?</h1>
            <WrapListStyle>
            {week_score.map((v,i)=>{
                    return (
                        <div key={i} style={{maxWidth:"100%",display:"flex" ,margin:"20px", justifyContent:"space-around"}}>
                            <span>{v.day}</span>
                            {Array.from({length:5}, (item,idx)=>{
                                return (
                                    <>
                                    <StarStyle key={idx}
                                    style ={{backgroundColor: (v.score < idx) ? "#dfdfdf" : "red"}}
                                    >
                                    </StarStyle>
                                    </>
                                )
                            })}
                            <NextBtnStyle key={i} onClick={()=>{
                                history.push(`detail/${v.day}`)
                            }}></NextBtnStyle>
                        </div>
                    )
            })}
            </WrapListStyle>
            <h2>평균 평점</h2>
            <span>{avg}</span>
            <div>
                <button onClick={()=>{
                    setAvg(0)
                }}>Reset</button>
            </div>
        </div>
    )




    
};
const StarStyle = styledComponents.div`
    width: 30px;
    height: 30px;
    background: #ea2027;
    transform: rotate(45deg);
    margin : 0 20px;
`;
const WrapListStyle = styledComponents.div`
  width : 100%;
  margin : auto;
`;
const BtnAnimation = keyframes`
    from {
        transform : rotate(0deg);
    }
    to {
        transform : rotate(360deg);
    }
`;

const NextBtnStyle = styledComponents.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
  margin-left : 5px;
  animation : ${BtnAnimation} infinite 2s alternate;
`;
// const AvgBoxStyle = styledComponents.div`
//   margin-top : 10px;
// `;

export default Home;