import React from "react";
import MoviesList from "./MoviesList";
import MoviesForm from "./MovieForm";
import MoviesStats from "./MovieStats";

const MoviesContainer = ()=>{

    return (
        <div>
            <div className="text-center md-3" style={{background:"grey"}}>
                <h1> My Big Movie List </h1>
            </div>
                <div className="row"> 
                    <div className="col-4 text-center">
                                <MoviesForm/>
                                 <MoviesStats/>
                    </div>
                    <div className="col-8 text-center">
                                <MoviesList/>
                    </div>
                    
                </div>
                   
        </div>
    )
}

export default MoviesContainer