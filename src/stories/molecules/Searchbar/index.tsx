import { Box, Container } from "@mui/material";
import "./index.css";
import SearchIcon from '../../atoms/icons/searchIcon';
import InputField from "../../atoms/InputField";
import {baseTheme} from '../../../theme';
interface SearchProps{
    placeholder:string;
    border?:string;
    placeholdercolor?:string;
    onchange:any;
}

export const SearchBar = (props:SearchProps)=>{
    return(
        <Box component={Container} className={'search-bar'}>
            <SearchIcon stroke={baseTheme.palette.greyscale.darker}/>
            <InputField onChange={props.onchange} placeholder={props.placeholder} placeholdercolor={props.placeholdercolor} size='large'/>
        </Box>
    )
}