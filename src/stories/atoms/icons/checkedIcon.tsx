import {ReactComponent as Checked} from '../../assets/icons/checked.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function CheckedIcon(props:IconProps){
    return(
        <Checked fill={props.fill} stroke={props.stroke} />
    )
}