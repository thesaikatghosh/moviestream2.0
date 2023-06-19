import React from 'react'

import { img_300, unavailable } from '../config/config'
import Badge from '@mui/material/Badge'
import ContentModel from './ContentModel';

function SinglePage(props) {
    const { id, title, poster_path, media_type, vote_average, date } = props
    return (
        <>
            <ContentModel media_type={media_type} id={id} >
            <Badge badgeContent={vote_average.toFixed(1)} color={vote_average>8? 'primary' : 'secondary'}>
            
                 </Badge>
                <img className="card-img" src={poster_path ? `${img_300}/${poster_path}` : unavailable} alt={title} />

                <span className="card-heading">{title}</span>
                <div className="card-content">
                    <span className="media-type">{media_type == "tv" ? "TV Series" : "Movie"}</span>
                    <span className="date">{date}</span>
                </div>

            </ContentModel>



        </>
    )
}

export default SinglePage