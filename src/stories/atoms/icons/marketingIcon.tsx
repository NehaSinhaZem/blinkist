import {ReactComponent as Marketing} from '../../assets/icons/lineGraph.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function MarketingIcon(props:IconProps){
    return(
        <Marketing fill={props.fill} stroke={props.stroke} />
    )
}