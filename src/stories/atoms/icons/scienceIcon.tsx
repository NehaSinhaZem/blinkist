import {ReactComponent as Science} from '../../assets/icons/science.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function ScienceIcon(props:IconProps){
    return(
        <Science fill={props.fill} stroke={props.stroke} />
    )
}