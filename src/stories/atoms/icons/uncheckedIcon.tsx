import {ReactComponent as Unchecked} from '../../assets/icons/unchecked.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function UncheckedIcon(props:IconProps){
    return(
        <Unchecked fill={props.fill} stroke={props.stroke} />
    )
}