import {ReactComponent as Health} from '../../assets/icons/health.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function HealthIcon(props:IconProps){
    return(
        <Health fill={props.fill} stroke={props.stroke} />
    )
}