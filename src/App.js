

import { Container } from '@mui/system';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './Components/Header';
import SimpleBottomNavigation from './Components/SimpleBottomNavigation';
import Trending from "./Pages/Trending/Trending"
import Movies from "./Pages/Movies/Movies"
import TvSeries from './Pages/TvSeries/TvSeries'
import Search from './Pages/Search/Search'

function App() {
  return (
    <>
    <Header/>
     <div className="mainSection">
   
      <Container>
      <Routes>
      <Route path="/" element={<Trending/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/tv" element={<TvSeries/>} />
      <Route path="/search" element={<Search/>} />
    
      </Routes>



      </Container>
     </div>
     <SimpleBottomNavigation/>
    </>
  );
}

export default App;
