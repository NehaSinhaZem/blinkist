import {ReactComponent as Corporate} from '../../assets/icons/corporate.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function CorporateIcon(props:IconProps){
    return(
        <Corporate fill={props.fill} stroke={props.stroke} />
    )
}