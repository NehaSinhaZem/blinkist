import { Box, Container, ThemeProvider, Typography } from "@mui/material";
// import "./index.css";
// import Typography from "../../atoms/Typography";
import {baseTheme} from "../../../theme";
interface TabProps{
    text:string;
    textColor?:string;
    width:string;
    height:string;
    lineColor?:string;
}

export const Tab = (props:TabProps)=>{
    return(
        <Box component={Container} className={'search-bar'} width={props.width} height={props.height}>
            <ThemeProvider theme={baseTheme}>
            <Typography variant="subtitle1">{props.text}</Typography>
            <hr style={{borderColor:props.lineColor}}/>
            </ThemeProvider>
        </Box>
    )
}