import {ReactComponent as Investment} from '../../assets/icons/invest.svg';

interface IconProps{
    stroke?:string,
    fill?:string;
}
export default function InvestmentIcon(props:IconProps){
    return(
        <Investment fill={props.fill} stroke={props.stroke} />
    )
}