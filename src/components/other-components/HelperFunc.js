import React from "react"

export const filterMovie = (movie)=>{
    let firstMovie = movie[0]
    for (let i=1; i<movie.length; i++){
        if( firstMovie.rank < movie[i].rank){
            firstMovie = firstMovie
        } else{
            firstMovie = movie[i]
        }
    }
    return firstMovie
}

export const filterMovieData = (movies,filter,dropDown)=>{
    let result 
    if(filter){
        result = movies.filter((mov)=>{
            return mov.name.toLowerCase().includes(filter.toLowerCase())
        })
    } else if (dropDown === "atoz"){
        result = [...movies].sort((a,b)=>{
                let fa = a.name.toLowerCase()
                let fb = b.name.toLowerCase()
                if(fa<fb){
                    return -1;
                }
                if(fa>fb){
                    return 1
                }
                return 0
            })
    } else if (dropDown === "ztoa"){
        result = [...movies].sort((a,b)=>{
                let fa = a.name.toLowerCase()
                let fb = b.name.toLowerCase()

                if(fa<fb){
                    return 1;
                }
                if(fa>fb){
                    return -1
                }
                return 0
            })
    } else if (dropDown === "1to100"){
        result =  [...movies].sort((a,b)=>{
                     return a.rank - b.rank
                    })
    } else  if (dropDown === "100to1"){
        result =  [...movies].sort((a,b)=>{
                    return b.rank - a.rank
                })
    } else {
        result = movies
    } 
    return result
}

//  useEffect(()=>{
//         if(dropDown === "atoz"){
//             const alphaDecending = [...movies].sort((a,b)=>{
//                 let fa = a.name.toLowerCase()
//                 let fb = b.name.toLowerCase()
//                 if(fa<fb){
//                     return -1;
//                 }
//                 if(fa>fb){
//                     return 1
//                 }
//                 return 0
//             })
//             setFinalData(alphaDecending)
//         } 
//         else if (dropDown === "ztoa"){
//                 const alphaAscending = [...movies].sort((a,b)=>{
//                 let fa = a.name.toLowerCase()
//                 let fb = b.name.toLowerCase()

//                 if(fa<fb){
//                     return 1;
//                 }
//                 if(fa>fb){
//                     return -1
//                 }
//                 return 0
//             })
//             setFinalData(alphaAscending)
//         }
//         else if (dropDown === "1to100"){
//             const rankAscending = [...movies].sort((a,b)=>{
//                      return a.rank - b.rank
//                     })
//              setFinalData(rankAscending)  
//         }
//         else if (dropDown === "100to1"){
//                 const rankDecending = [...movies].sort((a,b)=>{
//                     return b.rank - a.rank
//                 })
//             setFinalData(rankDecending)
//         }
//     },[dropDown])

//     useEffect(()=>{
//         const fileterMovies = movies.filter((mov)=>{
//             return mov.name.toLowerCase().includes(filter.toLowerCase())
//         })
//         setFinalData(fileterMovies)
//     },[filter])
        