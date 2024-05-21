import React from "react"
import NavBar from "../component/list/navBar/navBar"
import FilteredProducts from "../component/class/eachproduct/filter"


function BlogScreen(){
    return(
        <div>
         <NavBar/>
         <p style={{fontSize:'20px',position:'relative',left:'45%',color:'blue',fontWeight:'bolder'}}>FilteredProducts</p>
         <FilteredProducts/>
     
           
        </div>
    )
}
export default  BlogScreen