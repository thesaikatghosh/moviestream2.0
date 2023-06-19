import axios from 'axios'
import { React, useEffect } from 'react'
import { Stack } from '@mui/material';
import Chip from '@mui/material/Chip';

function Genres(props) {

    const { selectedGenres, setSelectedGenres, genres, setGenres, setPage, type, } = props


    // Add Genres:

    const handelAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }
    // remove 
    const HandelRemove=(genre)=>{
        setSelectedGenres(selectedGenres.filter((select)=>select.id!==genre.id));
        setGenres([...genres,genre]);
        setPage(1);
    }


    // fetch Genres:
    const getGenres = async () => {

        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
            console.log("genres", data);
            setGenres(data.genres)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getGenres();

        return () => {
            setGenres({})
        }
    }, [])

    return (
        <>
            <div className="genres">
            
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>

                    {selectedGenres.map((genre) => (
                        <Chip
                            style={{ margin: "4px" }}
                            label={genre.name}
                            key={genre.id}
                            color="secondary"
                            clickable
                            size="small"
                            onDelete={()=>HandelRemove(genre)}
                           
                        />
                    ))}

                    {Array.isArray(genres)?genres.map((genre) => (
                        <Chip
                            style={{ margin: "4px" }}
                            label={genre.name}
                            key={genre.id}
                            clickable
                            size="small"
                            color='primary'
                         onClick={()=>handelAdd(genre)}
                        />
                    )): null}

                </Stack>
            </div>
        </>
    )
}

export default Genres