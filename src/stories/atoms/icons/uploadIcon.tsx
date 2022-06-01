import {ReactComponent as Upload} from '../../assets/icons/upload.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function UploadIcon(props:IconProps){
    return(
        <Upload fill={props.fill} stroke={props.stroke} />
    )
}