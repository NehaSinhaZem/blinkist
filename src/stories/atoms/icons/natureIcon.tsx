import {ReactComponent as Nature} from '../../assets/icons/nature.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function NatureIcon(props:IconProps){
    return(
        <Nature fill={props.fill} stroke={props.stroke} />
    )
}