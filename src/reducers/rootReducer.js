import { combineReducers } from "redux"
import drawerReducer from "./drawerReducer";
import settingReducer from "./settigReducer";
import trainerReducer from "./trainerReducer";

const rootReducer = combineReducers({
  drawer: drawerReducer,
  setting: settingReducer,
  trainer: trainerReducer
})

export default rootReducer