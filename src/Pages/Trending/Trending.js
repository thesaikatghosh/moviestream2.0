import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../Components/CustomPagination';
import SinglePage from '../../Components/SinglePage';

function Trending() {

  const [trendingData, setTrendingData] = useState([]);
  const[page, setPage]=useState(1)

   // fetch trending api
  const getTrending = async () => {
    try {
      const { data } = await axios.
      get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
      setTrendingData(data.results)
      console.log(data.results);
    }
    catch (error) {
      console.log(error.message)
    }

  }

  useEffect(() => {

    getTrending();

  }, [page])







  return (
      <>
     <div className="PageTitle">Trending Today</div>
     <div className="PageContent">
      {
        trendingData && trendingData.map((t)=>
          <SinglePage
           key={t.id}
           id={t.id}
           title={t.name || t.title}
           poster_path={t.poster_path}
           media_type={t.media_type}
           vote_average={t.vote_average}
           date={t.first_air_date || t.release_date}
          />
        
        )
      }
     </div>
      
      {/* custom pagination */}
       
       <CustomPagination setPage={setPage}/>

     </>
      )
}

export default Trending