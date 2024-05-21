import React from "react"
import NavBar from "../component/list/navBar/navBar"
import Mounting from "../component/class/lifecycle/mounting/mounting"



function AboutScreen(){
    return(
        <div>
        <NavBar/>
        <p style={{fontSize:'20px',position:'relative',left:'40%',color:'blue',fontWeight:'bolder'}}>ProductDetailesCategoryWise</p>
         <Mounting/>
     {/* <h3>Wlcome to AboutScreen</h3> */}
           
        </div>
    )
}
export default AboutScreen