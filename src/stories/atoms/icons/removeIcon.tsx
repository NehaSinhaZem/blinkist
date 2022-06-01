import {ReactComponent as Remove} from '../../assets/icons/remove.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function RemoveIcon(props:IconProps){
    return(
        <Remove fill={props.fill} stroke={props.stroke} />
    )
}