
import {ReactComponent as Time} from '../../assets/icons/time.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function TimeIcon(props:IconProps){
    return(
        <Time fill={props.fill} stroke={props.stroke} />
    )
}