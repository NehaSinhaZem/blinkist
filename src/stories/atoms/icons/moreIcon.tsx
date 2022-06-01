import {ReactComponent as MoreIcon} from '../../assets/icons/more.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function More(props:IconProps){
    return(
        <MoreIcon fill={props.fill} stroke={props.stroke} />
    )
}