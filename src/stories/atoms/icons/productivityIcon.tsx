import {ReactComponent as Productivity} from '../../assets/icons/productivity.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function ProductivityIcon(props:IconProps){
    return(
        <Productivity fill={props.fill} stroke={props.stroke} />
    )
}