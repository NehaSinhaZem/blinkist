import {ReactComponent as History} from '../../assets/icons/history.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function HistoryIcon(props:IconProps){
    return(
        <History fill={props.fill} stroke={props.stroke} />
    )
}