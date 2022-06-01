import { ThemeProvider } from "@emotion/react";
import { ButtonBase, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { useState } from "react";
import { baseTheme } from "../../../theme";
import TimeIcon from "../../atoms/icons/timeIcon";
import UserIcon from "../../atoms/icons/userIcon";
import MuiButton from "../../atoms/MuiButton";
import PlusIcon from "../../atoms/icons/plusIcon";
import { IconText } from "../IconText";
import MoreIcon from '../../atoms/icons/moreIcon';
import book1 from "../../assets/1.png";
import book2 from "../../assets/2.png";
import book3 from "../../assets/3.png";
import book4 from "../../assets/4.png";
import book5 from "../../assets/5.png";
import book6 from "../../assets/6.png";
import book7 from "../../assets/7.png";
import book8 from "../../assets/8.png";
import book9 from "../../assets/9.png";
import book10 from "../../assets/10.png";
import book11 from "../../assets/11.png";
interface CardProps{
  id:number,
    image?:string,
    title:string,
    author:string,
    readTime?:string,
    totalReads?:string,
    action?:any,
    size:any,
    margin?:string,
    bgcolor?:string,
    status?:string,
    click?:any,
    onclick?:any
}
export const books = [
  {'id':1,'image':book1,'title':'Bring Your Human To Work','author':'Erica Keswin','readTime':'13 minute','currentReads':'1.9k','added':false,'finished':false},
  {'id':2,'image':book2,'title':'Beyond Entrepreneurship','author':'Jim Collins & Bill Lazier','readTime':'13 minute','currentReads':'1.9k','added':true,'finished':false},
  {'id':3,'image':book3,'title':"Doesn't hurt to ask",'author':'Trey Gowdy','readTime':'13 minute','currentReads':'1.9k','added':true,'finished':true},
  {'id':4,'image':book4,'title':'The fate of food','author':'Amanda Little','readTime':'12 minute','currentReads':'16k','added':true,'finished':false},
  {'id':5,'image':book5,'title':'Life of the Stoics','author':'Ryan Holiday & Stephen Hansel','readTime':'13 minute','currentReads':'1.9k','added':false,'finished':false},
  {'id':6,'image':book6,'title':'Loving Your Business','author':'Debby King','readTime':'13 minute','currentReads':'1.9k','added':true,'finished':false},
  {'id':7,'image':book7,'title':'The Lonely Century','author':'Noreena Hertz','readTime':'15 minute','currentReads':'1.9k','added':true,'finished':true},
  {'id':8,'image':book8,'title':'Eat Better, Feel Better','author':'Giada De Lauretiis','readTime':'13 minute','currentReads':'1.9k','added':true,'finished':false},
  {'id':9,'image':book9,'title':'Dropshipping','author':'James Moore','readTime':'12 minute','currentReads':'1.9k','added':true,'finished':true},
  {'id':10,'image':book11,'title':'Employee to Entrepreneur','author':'Steve Glaveski','readTime':'14 minute','currentReads':'1.9k','added':true,'finished':false}
]
export const BookCard = (props:CardProps)=>{
  
    return(
      
        <ThemeProvider theme={baseTheme}>        
        <Card sx={[props.size]} style={{backgroundColor:props.bgcolor,margin:'1vh auto'}} >
          <div onClick={props.onclick}>
            <CardMedia
                component="img"
                image={props.image}
                alt="cover"
            />
      <CardContent>
          <Typography variant="subtitle1" color="textcolor.darker">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textcolor.light">
            {props.author}
          </Typography>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:'15px'}}>
          <IconText text={props.readTime+' read'} icon={<TimeIcon/>} color='palette.grayscale.dark'/>
          <IconText text={props.totalReads+' reads'} icon={<UserIcon/>} color='palette.grayscale.dark'/></div>
          
      </CardContent> </div>
      <CardActions>
        { (props.status=='Add to library' && 
      <MuiButton variant="text" label={props.status} startIcon={<PlusIcon stroke={baseTheme.palette.secondary.main}/>} size='large' color='secondary.main' onClick={props.click}/>
        ) ||
          (<MuiButton variant="text" label={props.status} size='large' color='secondary.main' onClick={props.click}/>
          
          )}
      </CardActions>
        </Card>
        </ThemeProvider>
      
    )
}