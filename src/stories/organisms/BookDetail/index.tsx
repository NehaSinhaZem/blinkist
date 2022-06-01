import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Component, SyntheticEvent, useEffect, useState } from "react";
import { baseTheme } from "../../../theme";
import TimeIcon from "../../atoms/icons/timeIcon";
import MuiButton from "../../atoms/MuiButton";
import book from "../../assets/2.png";
import { IconText } from "../../molecules/IconText";
import RightIcon from "../../atoms/icons/rightIcon";

interface DetailProps{
    id?:number;
}
export const Detail= ()=>{
    interface TabPanelProps{
        children:any;
        value:any;
        index:any;
    }
        
        function TabPanel(props: TabPanelProps) {
          const { children, value, index, ...other } = props;
        
          return (
            <div style={{color:'baseTheme.palette.backgroundcolor.main',display:'inline-flex',flexDirection:'column'}}
              role="tabpanel"
              hidden={value !== index}
              id={`simple-tabpanel-${index}`}
              aria-labelledby={`simple-tab-${index}`}
              {...other}>
              {value === index && (
                  <Grid container>{children}</Grid>
              )}
            </div>
          );
        }
    const [value,setValue] = useState('syn');
    function handleChange(event: SyntheticEvent,newValue:string){
        setValue(newValue);
    }
    return(
        <ThemeProvider theme={baseTheme}>
        <Grid container style={{marginInline:'10vw',width:'80vw',justifyContent:'space-around'}}>
            <Grid item xs={12}>
                <Typography variant='body2' color={baseTheme.palette.textcolor.dark}>Get the key ideas from</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant='h1' color={baseTheme.palette.textcolor.dark}>Beyond Entrepreneurship 2.0</Typography>
                <Typography variant='subtitle5' color={baseTheme.palette.textcolor.dark}>Turning Your Business into an Enduring Great Company</Typography>
                <Typography variant='body1' color={baseTheme.palette.textcolor.light}>By Jim Collins and Bill Lazier</Typography>
                <IconText text={'15-minute read'} icon={<TimeIcon/>} color={baseTheme.palette.textcolor.light}/>
                <Grid container>
                    <Grid item xs={4}>
                        <MuiButton label="Read now" color='primary' size='small' onClick={()=>{}}/> 
                    </Grid>
                    <Grid item xs={4}>
                        <MuiButton label="Finished Reading" variant='contained' backgroundColor='primary' onClick={()=>{}}/> 
                    </Grid>
                    <Grid item xs={4}>
                        <MuiButton label="Send to Kindle" endIcon={<RightIcon/>} variant='text' color='textcolor.light' onClick={()=>{}}/> 
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <img src={book} />
            </Grid>
            <Grid item xs={8}>
                <Tabs aria-label="basic tabs example" textColor='primary' value={value} onChange={handleChange}>
                    <Tab label="Synopsis" value='syn'/>
                    <Tab label="Who is it for?" value='for' /> 
                    <Tab label='About the Author' value='about'/>
                </Tabs>
                <TabPanel value={value} index='syn'>
                    <Typography variant="body2">Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier's essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today's business world.</Typography>
                </TabPanel>
                <TabPanel value={value} index='for'>
                    For you
                </TabPanel>
                <TabPanel value={value} index='about'>
                    Inspirational
                </TabPanel>
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </Grid>
        </ThemeProvider>
    )
}