import React from "react";
import { deletMovie } from "../Redux-Components/Actions/moviesActions";
import { useDispatch } from "react-redux";

const MoviesCart = (props)=>{

    const dispatch = useDispatch()
    
     const HandleDelet = () =>{
        dispatch(deletMovie(props.movie.id))
    }

    

    return (
        // <div class="thumbnail"></div>
            <div>
                <div class="card mb-3 card-img-top " style={{width: "15rem"}}>
                    <img src={props.movie.imageSrc} alt="..."/>
                    <div class="card-body">
                        {/* <h5 class="card-title">Card title</h5> */}
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                         <button onClick={HandleDelet} class="btn btn-primary"> Delete </button>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                    </div>
                    {/* <img src={props.movie.imageSrc} class="img-thumbnail" alt="image not found"/>
                    <h3> {props.movie.name} </h3>
                    <h4> {props.movie.rank} </h4> */} 
            </div>
    )
}

export default MoviesCart