
import {ReactComponent as DownArrow} from '../../assets/icons/downArrow.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function DownArrowIcon(props:IconProps){
    return(
        <DownArrow fill={props.fill} stroke={props.stroke} />
    )
}