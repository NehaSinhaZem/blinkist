import { Box, Container, Grid, Icon, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

interface IconTextProps{
    text:string;
    color?:string;
    textVariant?:string;
    icon:any;
    align?:string;
}

export const IconText = (props:IconTextProps)=>{
    return(
        <div style={{display:'inline'}}>
            <Icon style={{display:'inline',color:'red'}}>{props.icon}</Icon>
            <Typography variant="caption" color={props.color}> {props.text} </Typography>
        </div> 
    )
}