import React, { useState } from 'react'
import axios from "axios"
import {useEffect} from "react"
import CustomPagination from '../../Components/CustomPagination';
import SinglePage from '../../Components/SinglePage';
import Genres from '../../Components/Genres';
import useGenre from '../../Hooks/useGenre'
function Movies() {

  // movies state
   const[movies, setMovies]=useState([])
   const[page, setPage]=useState(1);
   const[numOfPage, setNumOfPage]=useState(12);
   

 // Genres State:
   const[selectedGenres, setSelectedGenres]=useState([]);
   const[genres, setGenres]=useState([]);

 
  //
  const genreforURL=useGenre(selectedGenres);

  // fetch Movies api
   
    const GetMovie=async()=>{
      
      try{
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)

       setMovies(data.results);
       setNumOfPage(data.total_pages)
       console.log(data);
       

      

      } catch(error)
      {
        console.log("error",error.massage)
      }
     

    }  


   // useEffect
     useEffect(() => {
      
      GetMovie();

     },[genreforURL, page])




  return (
    <>
    <div className="PageTitle">Movies</div>

    {/* genres components */}
    <Genres
    selectedGenres={selectedGenres}
    setSelectedGenres={setSelectedGenres}
    genres={genres}
    setGenres={setGenres}
    setPage={setPage}
    type="movie"
    />
    <div className="PageContent">
      {
        movies && movies.map((m)=>
          <SinglePage
           key={m.id}
           id={m.id}
           title={m.title}
           poster_path={m.poster_path}
           media_type="Movie"
           vote_average={m.vote_average}
           date={m.release_date}
          />
        
        )
      }
     </div>
     <CustomPagination setPage={setPage} numOfPage={numOfPage}/>


    </>
  )
}

export default Movies