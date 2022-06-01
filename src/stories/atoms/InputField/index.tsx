
import Input from "@mui/material/Input";
import './index.css';
interface InputProps{
    size?: 'small' | 'medium' | 'large';
    label?: string;
    defaultValue?:string;
    required?:boolean;
    onChange:()=>void;
    error?:any;
    helperText?:string;
    type?:string;
    border?:string;
    variant?:string;
    placeholder?:string,
    placeholdercolor?:string;
}
const InputField =(
    {size = 'medium',
    label,
    defaultValue,
    required,
    onChange,
    error,
    helperText,
    type,
    border,
    variant="outlined",
    placeholder,
    placeholdercolor, ...props}:InputProps)=>{
        return(
            <Input className={[ `storybook-input--${size}`].join(' ')} placeholder={placeholder} style={{color:placeholdercolor}} onChange={onChange}
            {...props}/>
        )
    }

// TextFieldComponent.propTypes = {
//   label: PropTypes.string.isRequired,
//   value: PropTypes.string,
//   required: PropTypes.bool,
//   onChange: PropTypes.func,
//   error: PropTypes.bool,
//   errorMessage: PropTypes.string,
//   type: PropTypes.oneOf([
//     "text",
//     "password",
//     "email",
//     "date",
//     "time",
//     "datetime-local",
//   ]),
//   onBlur: PropTypes.func,
// };

// TextFieldComponent.defaultProps = {
//   value: "",
//   required: false,
//   error: false,
//   errorMessage: "",
//   type: "text",
// });

export default InputField;