import React from "react";
import './index.css';

interface TypographyProps{
    variant?:string;
    color?:string;
    text:string;
}
export default function Typography({variant,color,text}:TypographyProps){
    switch (variant) {
        case "subtitle1":
            return(
                <span className="subtitle1" style={{color:color}}>{text}</span>
            );
        case "subtitle2":
            return (
                <span className="subtitle1" style={{color:color}}>{text}</span>
            );
        case "body1":
            return (
                <span className="body1" style={{color:color}}>{text}</span>
            );
        case "body2":
            return (
                <span className="body2" style={{color:color}}>{text}</span>
            );
        case "caption3":
            return (
                <span className="caption3" style={{color:color}}>{text}</span>
            )
        default:
            return (
                <span className="beta2" style={{color:color}}>{text}</span>
            )
    }
}