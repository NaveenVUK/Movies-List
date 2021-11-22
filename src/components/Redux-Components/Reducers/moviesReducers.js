
const intialMovieState = []

const moviesReducers = (state=intialMovieState, action)=>{
    switch(action.type){
        case "ADD-MOVIE" : {
            return [...state, {...action.payload}]
        }
        case "DELETE-MOVIE" : {
            const newState = state.filter((ele)=>{
                return ele.id !== action.payload
            })
            return [...newState]
        }
        // case "FILTER_DATA" : {
        //     let fileterMovies = state.filter((mov)=>{
        //     return mov.name.toLowerCase().includes(action.payload.toLowerCase())
        // })
        //  return [...fileterMovies]
        // }
        default : {
            return state
        }
    }
}

export default moviesReducers