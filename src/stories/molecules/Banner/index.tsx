import { ThemeProvider } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { baseTheme } from "../../../theme";

import image from '../../../stories/assets/reading.png';
interface BannerProps{
    title?:string,
    description?:string
}
export const Banner=({title,description}:BannerProps)=>{
    return(
        <ThemeProvider theme={baseTheme}>
        <Grid container bgcolor={baseTheme.palette.backgroundcolor.main} style={{padding:'30px'}}>
            <Grid item xs={6}>
                <ThemeProvider theme={baseTheme}>
                <Typography variant="h1" color={baseTheme.palette.textcolor.dark}>{title}</Typography>
                <Typography variant="subtitle2" color={baseTheme.palette.textcolor.light}>{description}</Typography>
                </ThemeProvider>
            </Grid>
            <Grid item xs={6} textAlign='right'>
                <img src={image}/>
            </Grid>
        </Grid>
        </ThemeProvider>
    )
}