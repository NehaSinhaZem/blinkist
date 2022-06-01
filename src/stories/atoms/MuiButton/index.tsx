import Button from "@mui/material/Button";
import './index.css';
import { ThemeProvider, Typography } from '@mui/material';
import { baseTheme } from "../../../theme";
interface ButtonProps{
    size?: 'small' | 'medium' | 'large';
    onClick:()=>void;
    color?:string;
    backgroundColor?:string;
    variant?: "text" | "outlined" | "contained" | undefined;
    startIcon?:any;
    endIcon?:any;
    label?:string;
}
const MuiButton =(
    {size = 'medium',
    onClick,
    color,
    backgroundColor,
    variant="outlined",
    startIcon,
    endIcon,
    label}:ButtonProps)=>{
        return(
            <Button className={[ `button--${size}`].join(' ')} startIcon={startIcon} endIcon={endIcon} variant={variant} onClick={onClick}>
                <ThemeProvider theme={baseTheme}><Typography color={color} variant='body1'>{label}</Typography></ThemeProvider>
            </Button>
        )
    }
export default MuiButton;