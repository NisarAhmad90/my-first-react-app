import { useState } from "react";

type ButtonProps= {
    title: string;
    onClick?: ()=> void;
    disabled ?: boolean;
}
export function Button( {title, disabled}: ButtonProps) {

    
    
    const [counter , setCounter]= useState<number>(0);
    const string = disabled ? "disabled": title +" Number of click "+ counter; 
    function handleClick () {
        
        setCounter(counter + 1);

    }
    return (
    <button  disabled={disabled} onClick= {handleClick}>  {string} </button>
    )

}