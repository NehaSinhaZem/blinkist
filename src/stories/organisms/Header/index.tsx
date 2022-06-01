import { ThemeProvider } from "@emotion/react";
import { Avatar, Grid, Typography } from "@mui/material";
import { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../../stories/assets/logo.png';
import { baseTheme } from "../../../theme";
import DownArrowIcon from "../../atoms/icons/downIcon";
import SearchIcon from "../../atoms/icons/searchIcon";
import UpArrowIcon from "../../atoms/icons/upIcon";
import MuiButton from "../../atoms/MuiButton";
import ExtendedMenu from "../Menu";

import './index.css';

export const Header=()=>{
    const [up,setUp] = useState(true);
    const toggleExplore = ()=>{
        setUp(!up);
    }
    const navigate = useNavigate();
    function showLibrary(){
        navigate('/');
    }
    return(
        <div>
        <Grid container style={{padding:'38px 200px'}} spacing={0.3}>
            <Grid item xs={2}>
            <img src={logo} height={26} width={124}/><br/>
            </Grid>
            <Grid item xs={1}>
                <SearchIcon stroke={baseTheme.palette.greyscale.darker}/>
            </Grid>
            <Grid item xs={2}>
                <MuiButton variant="text" endIcon={up?<DownArrowIcon/>:<UpArrowIcon/>} label="Explore" color='textcolor.dark' onClick={toggleExplore}/>
            </Grid>
            <Grid item xs={2}>
                <MuiButton variant="text" label='My Library' color='textcolor.dark' onClick={showLibrary}/>
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
            <Avatar sx={{ bgcolor: 'cornflowerBlue', display:'inline-flex' }}>A</Avatar><span style={{alignContent:'center'}}><DownArrowIcon/></span>
                {/* <MuiButton variant="text" endIcon={} color='textcolor.dark' onClick={()=>{}}/> */}
            </Grid>
        </Grid>
        {!up?(<div className='menu'><ExtendedMenu/></div>):null}
        </div>
    )
}