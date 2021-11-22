import React, { useState } from "react";
import { startAddMovie } from "../Redux-Components/Actions/moviesActions";
import {useDispatch} from "react-redux"

const MoviesForm = ()=>{
    const [movieName, setMovieName] = useState("")
    const [imdb, setImdb] = useState("")

    const dispatch = useDispatch()

    const handleInputMovieDetails = (e)=>{
        if (e.target.name === "movieName"){
            setMovieName(e.target.value)
        } else if(e.target.name === "imdb"){
            setImdb(e.target.value)
        }
    }

     const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            id : Number(new Date()),
            name : movieName,
            rank : Number(imdb) 
        }
        dispatch(startAddMovie(formData))
        setMovieName("")
        setImdb("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="mb-3 flex-nowrap">
                <input type="text"  value={movieName} onChange = {handleInputMovieDetails} name = "movieName" placeholder="Enter Movie Name"/> <br/>
                </div>
                <div className="mb-3 flex-nowrap">
                <input type="Number" value={imdb} onChange = {handleInputMovieDetails} name="imdb" placeholder="IMDB Ranking"/><br/>
                </div>
                <div className="mb-3 flex-nowrap">
                <input type="submit" value="Add" className ="btn btn-primary"/> <br/>
                </div>
            </form>
        </div>
    )
}

export default MoviesForm