import {ReactComponent as ReadAgain} from '../../assets/icons/read.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function ReadAgainIcon(props:IconProps){
    return(
        <ReadAgain fill={props.fill} stroke={props.stroke} />
    )
}