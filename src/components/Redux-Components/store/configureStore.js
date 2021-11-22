import {createStore, combineReducers, applyMiddleware} from "redux"
import moviesReducers from "../Reducers/moviesReducers"
import thunk from "redux-thunk"

const ConfigureStore = ()=>{

    const store = createStore(combineReducers({
        movies : moviesReducers,
        filterMovies : moviesReducers
    }),applyMiddleware(thunk))

    return store
}

export default ConfigureStore