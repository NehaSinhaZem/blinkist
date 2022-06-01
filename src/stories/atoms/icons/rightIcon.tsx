import {ReactComponent as Right} from '../../assets/icons/rightArrow.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function RightIcon(props:IconProps){
    return(
        <Right fill={props.fill} stroke={props.stroke} />
    )
}