import {ReactComponent as Psycology} from '../../assets/icons/psychology.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function PsychologyIcon(props:IconProps){
    return(
        <Psycology fill={props.fill} stroke={props.stroke} />
    )
}