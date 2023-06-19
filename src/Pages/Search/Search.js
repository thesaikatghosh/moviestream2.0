import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SinglePage from '../../Components/SinglePage';
import CustomPagination from '../../Components/CustomPagination';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ErrorIcon from '@mui/icons-material/Error';




function Search() {


    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [numOfPage, setNumOfPage] = useState();

    console.log(searchText);
    console.log(content);

    const DarkTheme = createTheme({
        palette: {
            mode: 'dark',

            primary: {
                main: '#fff',
            },
        }
    });

    // fetch search api

    const GetSearch = async() => {
        // 
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY }&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
        console.log("search", data.results);
        // set content  and total page  :
        setContent(data.results);
        setNumOfPage(data.total_pages)


    }

    useEffect(() => {
        window.scroll(0, 0)
        GetSearch();
    }, [searchText, type, page])








    return ( <
        >
        <
        div >
        <
        ThemeProvider theme = { DarkTheme } >

        <
        div className = 'TextField' >

        <
        TextField sx = {
            {
                width: "80vw"
            }
        }
        inputProps = {
            { style: { fontWeight: "bold", color: "white" } } }
        InputLabelProps = {
            { style: { fontSize: 15, fontWeight: "bold", color: "white" } } }

        id = "filled-basic"
        label = "Search"
        variant = "filled"
        color = 'primary'
        onChange = {
            (e) => setSearchText(e.target.value) }
        /> <
        Button onClick = { GetSearch }
        sx = {
            { marginLeft: "10px" } }
        variant = "contained" >
        <
        SearchIcon / >
        <
        /Button> <
        /div>



        <
        div className = 'searchType' >

        <
        Tabs value = { type }

        textColor = "primary"
        indicatorColor = "primary"
        onChange = {
            (event, newValue) => {
                setType(newValue);
                setPage(1);
            }
        } >
        <
        Tab sx = {
            { fontWeight: "bold", width: "50%" } }
        label = "Search Movie" / >
        <
        Tab sx = {
            { fontWeight: "bold", width: "50%" } }
        label = "Search TV Series" / >

        <
        /Tabs> <
        /div> <
        /ThemeProvider>



        <
        div className = "PageContent" >




        {
            (content.length == 0) ?
            (type ? < h2 className = "notfound" > No Series Found < /h2> : <
                h2 className = "notfound" > No Movies Found < /h2>):
                content && content.map((t) => ( <
                    SinglePage key = { t.id }
                    id = { t.id }
                    title = { t.name || t.title }
                    poster_path = { t.poster_path }
                    media_type = { type ? 'tv' : 'movie' }
                    vote_average = { t.vote_average }
                    date = { t.first_air_date || t.release_date }
                    />
                ))
            }


            <
            /div>




            {
                numOfPage > 1 && ( <
                    CustomPagination setPage = { setPage }
                    numOfPage = { numOfPage }
                    />
                )
            } <
            /div> <
            />
        )
    }

    export default Search