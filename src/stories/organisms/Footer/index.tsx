import { ThemeProvider } from "@emotion/react";
import { Grid, Typography } from "@mui/material";

import logo from '../../../stories/assets/logo.png';
import { baseTheme } from "../../../theme";
import { NavItems } from "../../molecules/NavItems";

export const Footer = ()=>{
    return(
        <Grid container style={{padding:'0px 300px',marginTop:'100px'}} alignContent='center' bgcolor={baseTheme.palette.backgroundcolor.main} rowSpacing={4}>
        <ThemeProvider theme={baseTheme}>
            <Grid item xs={4} >
                <img src={logo} height={24} width={99}/><br/><br/><br/>
                <Typography variant='betasubtitle1' color='secondary'>Big ideas in small packages <br/>Start learning now</Typography>
            </Grid>
            <Grid item xs={8} display='inline-flex' justifyContent='space-between'>
                <NavItems category='Editorial' items={['Book list',"What is Notification?","What to read next?",'Benefits of reading']}></NavItems>
                <NavItems category='Useful Links' items={['Pricing',"Blinkist Business",'Gift cards',"Blinkist magazine",'Contact & help']}></NavItems> 
                <NavItems category='Company' items={['About',"Careers","Partners",'Code of Conduct']}></NavItems>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="caption" color={baseTheme.palette.textcolor.light}>© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography>
            </Grid>
        </ThemeProvider>
        </Grid>
    )
}