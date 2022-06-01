import { ThemeProvider } from "@emotion/react";
import { Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { baseTheme } from "../../../theme";

export interface NavProps{
    category?:string,
    items?:Array<string>
}

export const NavItems = (props:NavProps)=>{
    const items:any=[];
    props.items!=undefined && (
        props.items.forEach(item => items.push(
            <a href='' style={{textDecoration:'none'}}>
                <Typography variant="body2" key={item} color={baseTheme.palette.textcolor.light}>{item}</Typography></a>
        )));
    return(
        <div>
            <Typography variant="betabody1" color={baseTheme.palette.textcolor.dark}>{props.category}</Typography>
            {items}
        </div>
    )
}
