import {ReactComponent as Motivation} from '../../assets/icons/motivation.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function MotivationIcon(props:IconProps){
    return(
        <Motivation fill={props.fill} stroke={props.stroke} />
    )
}