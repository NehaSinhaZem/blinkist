import { ThemeProvider } from "@emotion/react"
import { Grid, Typography } from "@mui/material"
import { baseTheme } from "../../../theme"
import { Banner } from "../../molecules/Banner"
import { SearchBar } from "../../molecules/Searchbar"
import { BookCard,books } from "../../molecules/Card";
import {  useParams } from "react-router-dom"
import debouce from 'lodash.debounce';
import { useMemo, useState } from "react"

export const Explore = ()=>{
    const [search,setSearch] = useState<string>("");
    let listToDisplay = books;
    const handleSearch = (e:any) => {
        setSearch(e.target.value);
    };
    if (search !== "")
      listToDisplay = books.filter((d:any) => {
        return d.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())||d.author.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      });
    const debouncedResults = useMemo(() => {
        return debouce(handleSearch, 500);
    }, []);
    const {cat}=useParams();
    const description = "Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start"
    return(
        <Grid container style={{padding:'38px 200px'}}>
            <ThemeProvider theme={baseTheme}>
            <Grid item xs={12}>
                <Banner title={"Explore Books on " +cat} description={description}/>
            </Grid>
            <Grid item xs={12} sx={{margin:'50px auto'}}>
                <SearchBar placeholder={"Search By Title or Author"} onchange={debouncedResults}/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3" color='textcolor.dark'>Trending blinks</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
            {(listToDisplay.length>0 && Array.from(Array(listToDisplay.length)).map((_, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <BookCard id={listToDisplay[index].id} image={listToDisplay[index].image} title={listToDisplay[index].title} author={listToDisplay[index].author} readTime={listToDisplay[index]["readTime"]}
                     totalReads={listToDisplay[index].currentReads} status={ listToDisplay[index].added ? '...':'Add to library'} size='width: 20vw' bgcolor={baseTheme.palette.backgroundcolor.light}
                     />
                </Grid>
                )))}</Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3" color='textcolor.dark'>Just added</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
            {(listToDisplay.length>0 && Array.from(Array(listToDisplay.length)).map((_, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <BookCard id={listToDisplay[index].id} image={listToDisplay[index].image} title={listToDisplay[index].title} author={listToDisplay[index].author} readTime={listToDisplay[index]["readTime"]}
                     totalReads={listToDisplay[index].currentReads} status={'Add to library'} size='width: 20vw' bgcolor={baseTheme.palette.backgroundcolor.light}
                     />
                </Grid>
                )))}</Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3" color='textcolor.dark'>Featured Audio blinks</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
            {(listToDisplay.length>0 && Array.from(Array(listToDisplay.length)).map((_, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <BookCard id={listToDisplay[index].id} image={listToDisplay[index].image} title={listToDisplay[index].title} author={listToDisplay[index].author} readTime={listToDisplay[index]["readTime"]}
                     totalReads={listToDisplay[index].currentReads} status={'Add to library'} size='width: 20vw' bgcolor={baseTheme.palette.backgroundcolor.light}
                     />
                </Grid>
                )))}</Grid>
            </Grid>
            </ThemeProvider>
        </Grid>
    )
}