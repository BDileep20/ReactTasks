import React from "react";
import {  useNavigate } from "react-router-dom";


function  InvalidScreen(){
   const navigate=useNavigate()
    const navigateToMainScreen=()=>{
            navigate('/about')
    }
    return(
        <div>
            <h3>Hey you lost , Please check your direction</h3>
            <button onClick={navigateToMainScreen} className="btn btn-success">Back to home</button>
        </div>
    )
}
export default InvalidScreen