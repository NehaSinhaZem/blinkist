import {ReactComponent as Edit} from '../../assets/icons/edit.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function EditIcon(props:IconProps){
    return(
        <Edit fill={props.fill} stroke={props.stroke} />
    )
}