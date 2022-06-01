import React from "react";

import {ReactComponent as Search} from '../../assets/icons/search.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function SearchIcon(props:IconProps){
    return(
        <Search fill={props.fill} stroke={props.stroke} />
    )
}