import {combineReducers, createStore} from "redux";
import { cardsReducer } from "./cardsReducer";

const rootReducer = combineReducers({
    cards: cardsReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;