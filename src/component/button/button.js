import React from "react"


const ButtonComponent=(prop)=>{
    console.log(prop,"prop example")
    const {buttonText,bgColor,buttonProperties:{width,height}}=prop
    return (
    <>
    <button  style={{backgroundColor:bgColor,
        width:width,
        height:height}}>{buttonText}</button>
    </>
    )
}
export default ButtonComponent