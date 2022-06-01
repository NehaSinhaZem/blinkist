import {ReactComponent as Career} from '../../assets/icons/career.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function CareerIcon(props:IconProps){
    return(
        <Career fill={props.fill} stroke={props.stroke} />
    )
}