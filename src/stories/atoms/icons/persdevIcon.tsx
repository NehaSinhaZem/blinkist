import {ReactComponent as PersonalDev} from '../../assets/icons/barGraph.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function PersonalDevIcon(props:IconProps){
    return(
        <PersonalDev fill={props.fill} stroke={props.stroke} />
    )
}