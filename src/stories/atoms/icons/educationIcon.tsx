import {ReactComponent as Education} from '../../assets/icons/education.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function EducationIcon(props:IconProps){
    return(
        <Education fill={props.fill} stroke={props.stroke} />
    )
}