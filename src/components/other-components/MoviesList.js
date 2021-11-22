import React, { useState ,useEffect} from "react";
import MoviesCart from "./MovieCart";
import { useSelector} from "react-redux";
import { filterMovieData } from "./HelperFunc";
// import { filterData } from "../Redux-Components/Actions/moviesActions";


const MoviesList = ()=>{
    
    // https://www.omdbapi.com/?t=K.G.F&apikey=bfa60c3c

    const [filter, setFilter] = useState("")
    const [dropDown, setDropDown] = useState("")
    const [ finalData, setFinalData] = useState([])

    const movies = useSelector((state)=>{
        return state.movies
    })

    console.log("movies", movies);

    // useEffect(()=>{
    //     setFinalData(movies)
    // },[window.onload])

    const handleSelectChange = (e)=>{
        setDropDown(e.target.value)
    }

     const handleInputChange = (e)=>{
        setFilter(e.target.value)
    }

    // useEffect(()=>{
    //     if(dropDown === "atoz"){
    //         const alphaDecending = [...movies].sort((a,b)=>{
    //             let fa = a.name.toLowerCase()
    //             let fb = b.name.toLowerCase()
    //             if(fa<fb){
    //                 return -1;
    //             }
    //             if(fa>fb){
    //                 return 1
    //             }
    //             return 0
    //         })
    //         setFinalData(alphaDecending)
    //     } 
    //     else if (dropDown === "ztoa"){
    //             const alphaAscending = [...movies].sort((a,b)=>{
    //             let fa = a.name.toLowerCase()
    //             let fb = b.name.toLowerCase()

    //             if(fa<fb){
    //                 return 1;
    //             }
    //             if(fa>fb){
    //                 return -1
    //             }
    //             return 0
    //         })
    //         setFinalData(alphaAscending)
    //     }
    //     else if (dropDown === "1to100"){
    //         const rankAscending = [...movies].sort((a,b)=>{
    //                  return a.rank - b.rank
    //                 })
    //          setFinalData(rankAscending)  
    //     }
    //     else if (dropDown === "100to1"){
    //             const rankDecending = [...movies].sort((a,b)=>{
    //                 return b.rank - a.rank
    //             })
    //         setFinalData(rankDecending)
    //     }
    // },[dropDown])

    // useEffect(()=>{
    //     const fileterMovies = movies.filter((mov)=>{
    //         return mov.name.toLowerCase().includes(filter.toLowerCase())
    //     })
    //     setFinalData(fileterMovies)
    // },[filter])
        
        const resultt = filterMovieData(movies,filter,dropDown)

    return (
        <div>
            <div className="mb-3 input-group flex-nowrap">
             <input type="text" value={filter} onChange={handleInputChange} placeholder="Search By Name...."/> <br/>
             </div>
             <div className="mb-3"> 
                <select className="form-select"value={dropDown} onChange = {handleSelectChange}>
                    <option value=""> Order-By</option>
                    <option value="atoz"> Order by Name (A-Z) </option>
                    <option value="ztoa"> Order by Name (Z-A) </option>
                    <option value="1to100"> Order by Ranking (1-100) </option>
                    <option value="100to1"> Order by Ranking (100-1) </option>
                </select>
             </div>
            <div className="row match-to-row">
                    {resultt && resultt.map((ele)=>{
                    return (
                    <div className="col-3 "> <MoviesCart key={ele.id} movie={ele}/> </div>
                    )
            })}
            </div>
            
        </div>
    )
}

export default MoviesList