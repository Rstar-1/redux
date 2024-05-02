import { combineReducers } from "redux";
import reducers from "./table/reducers";

const rootReducer = combineReducers({
    reducers:reducers
})

export default rootReducer;