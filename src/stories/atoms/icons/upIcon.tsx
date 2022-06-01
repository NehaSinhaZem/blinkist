import {ReactComponent as UpArrow} from '../../assets/icons/upArrow.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function UpArrowIcon(props:IconProps){
    return(
        <UpArrow fill={props.fill} stroke={props.stroke} />
    )
}