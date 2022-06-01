
import {ReactComponent as User} from '../../assets/icons/user.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function UserIcon(props:IconProps){
    return(
        <User fill={props.fill} stroke={props.stroke} />
    )
}