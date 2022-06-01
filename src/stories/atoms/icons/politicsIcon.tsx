import {ReactComponent as Politics} from "../../assets/icons/politics.svg";

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function PoliticsIcon(props:IconProps){
    return(
        <Politics fill={props.fill} stroke={props.stroke} />
    )
}