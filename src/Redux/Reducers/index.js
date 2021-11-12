import { combineReducers } from "redux";
import isToggleButtonClickedReducer from "./toggleButton";

const rootReducers = combineReducers({
    toggle:isToggleButtonClickedReducer
})
export default rootReducers