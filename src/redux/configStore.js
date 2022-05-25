// 스토어 
import {legacy_createStore, combineReducers} from "redux";
import score from "./modules/score"

const rootReducer = combineReducers({score});  // 리듀서들 묶기 bucket:bucket 

const store = legacy_createStore(rootReducer);  // 그걸로 스토어 만들기

export default store;

 