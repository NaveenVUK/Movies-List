import axios from "axios"

export const startAddMovie = (movie)=>{
    return (dispatch,getState) =>{
        axios.get(`https://www.omdbapi.com/?t=${movie.name}&apikey=bfa60c3c`)
        .then((res)=>{
            if(res.data.hasOwnProperty("Error")){
                alert(res.data.Error)
            }
            else{
                const newData = {...movie, imageSrc : res.data.Poster, lang : res.data.Language}
                dispatch(addMovie(newData))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const addMovie = (movi)=>{
    return {
        type : "ADD-MOVIE",
        payload : movi
    }
}

export const deletMovie = (id)=>{
    console.log("id",id);
    return {
        type : "DELETE-MOVIE",
        payload : id
    }
}


// export const startGetUsers = ()=>{
//     return (dispatch,getState)=>{
//         //API call
//         axios.get("https://jsonplaceholder.typicode.com/users")
//             .then((res)=>{
//                 const result = res.data
//                 console.log(result);
//                 dispatch(setUser(result))
//             })
//             .catch((err)=>{
//                 alert(err.message)
//             })
//     }
// }

// export const setUser = (users)=>{
//     return {
//         type : "SET_USERS",
//         payload : users
//     }
// }



