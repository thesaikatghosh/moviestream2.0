import axios from "axios"
import { useState, useEffect } from "react"
import React from 'react'
import SinglePage from "../../Components/SinglePage"
import CustomPagination from "../../Components/CustomPagination"
import Genres from '../../Components/Genres';
import useGenre from '../../Hooks/useGenre'




function TvSeries() {



  // movies state
  const [tvSeries, setTvSeries] = useState([])
  const [page, setPage] = useState(1);
  const [numOfPage, setNumOfPage] = useState(12);

  //Genres State:
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);


  //
  const genreforURL = useGenre(selectedGenres);


  // fetch Tv Series api

  const GetMovie = async () => {

    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)

      setTvSeries(data.results);
      setNumOfPage(data.total_pages)





    } catch (error) {
      console.log("error", error.massage)
    }


  }


  // useEffect
  useEffect(() => {

    GetMovie();

  }, [genreforURL, page])









  return (
    <>
      <div className="PageTitle">Tv Series</div>

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
          tvSeries && tvSeries.map((m) =>
            <SinglePage
              key={m.id}
              id={m.id}
              title={m.name}
              poster_path={m.poster_path}
              media_type="tv"
              vote_average={m.vote_average}
              date={m.first_air_date}
            />

          )
        }
      </div>
      <CustomPagination setPage={setPage} numOfPage={numOfPage} />

    </>
  )
}

export default TvSeries