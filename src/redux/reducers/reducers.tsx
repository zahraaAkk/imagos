import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
const reducers: any = combineReducers({

	themeSwitch: themeReducer,

});

export default reducers;