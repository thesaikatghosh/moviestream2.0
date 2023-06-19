import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from "axios";
import { img_300, noPicture} from '../config/config';

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
// ];

const Carousel = ({media_type, id}) => {

  const[credits, setCredits]=useState([]);
//    const handelDargStart=e.preventDefault();

  const items=credits?.map((c)=>(
   
    <div className="carousel-items">
        <img
        className='carouselItem-img'
         src={c.profile_path ? `${img_300}/${c.profile_path}`: noPicture}
        //  onDragStart={handelDargStart}
        alt={c?.name} />
        <b className='carouselItem-name'>{c?.name}</b>
    </div>
   
  ))

  const responsive={
    0:{
        items:3,
    },
    512:{
        items:5,
    },
    1024:{
        items:7,
    },
   
  }


   
  const getCarousel=async()=>{
   const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
   console.log( "Carousel",data);
   setCredits(data.cast);
  }
   useEffect(()=>{
   getCarousel();
   },[])

  return (
    <AliceCarousel 
    responsive={responsive}
    autoPlay
    infinite
    disableDotsControls
    disableButtonsControls
    mouseTracking items={items} />
  );
}
export default Carousel;