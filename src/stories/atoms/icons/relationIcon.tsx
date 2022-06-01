import {ReactComponent as Relation} from "../../assets/icons/relationship.svg";


interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function RelationshipIcon(props:IconProps){
    return(
        <Relation fill={props.fill} stroke={props.stroke} />
    )
}