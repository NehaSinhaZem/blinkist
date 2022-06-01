
import {ReactComponent as Entrepreneur} from '../../assets/icons/entreprenuer.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function EntreprenuerIcon(props:IconProps){
    return(
        <Entrepreneur fill={props.fill} stroke={props.stroke} />
    )
}