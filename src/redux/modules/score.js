// bucket.js

// Actions
const CREATE = 'score/CREATE';
const DELETE = 'score/DELETE';

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
        realScore:0
    }
})
// console.log(week_score)


// const initialState = {
//     score:[]
// }
// Action Creators
export function createScore(score,day){
  return {type:CREATE, score,day};
}
export function deleteScore(score){   // (bucket_index)
  return {type:DELETE, score};         // bucket_index)
}

// Reducer                        //이전 값              
export default function reducer(state = week_score, action = {}) { //기존거 없애고,새로운거 추가하는 개념
  switch (action.type) {
    case "score/CREATE": {
        const score = action.score; // 새로운 배열 생성 
        const day = action.day;
        state.map((v,i)=>{
            v.realScore = v.day === day ? score : 0;
        })
        // console.log(state[0].realScore)
        return {day_score : state,
                

        }; // 새로운 배열 리턴
    }
    case "score/DELETE":{
      const new_score_list = state.score.filter((v)=> v !== action.score) ;
      return {score : new_score_list} ;
    }
    default: return state;
  }
}



