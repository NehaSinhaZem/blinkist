import React from "react";

import {ReactComponent as Plus} from '../../assets/icons/plus.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function PlusIcon(props:IconProps){
    return(
        <Plus fill={props.fill} stroke={props.stroke} />
    )
}