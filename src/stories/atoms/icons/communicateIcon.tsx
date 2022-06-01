import {ReactComponent as Communication} from '../../assets/icons/communicate.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function CommunicationIcon(props:IconProps){
    return(
        <Communication fill={props.fill} stroke={props.stroke} />
    )
}