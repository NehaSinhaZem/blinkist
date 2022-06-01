import {ReactComponent as Economics} from '../../assets/icons/economics.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function EconomicsIcon(props:IconProps){
    return(
        <Economics fill={props.fill} stroke={props.stroke} />
    )
}