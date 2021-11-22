import React from "react";
import { useSelector } from "react-redux";
import {filterMovie} from "./HelperFunc";

const MoviesStats = ()=>{
    const movies = useSelector((state)=>{
        return state.movies
    })

    const repos = filterMovie(movies)
    console.log("repos",repos);


    return (
            <div className="card text-black imageEdit" style={{width: "18rem"}}>
                {repos && <img src={repos.imageSrc}  alt="..."/> }
                <div className="card-body">
                        <h3> Total Movies - {movies.length} </h3> 
                        <hr/>
                        {repos && (
                            <h4 style={{color:"red"}}> Top Ranked Movie <br/> <strong> {repos.name} </strong> - {repos.lang}</h4>
                            )}
                </div>
            </div>
    )
}

export default MoviesStats