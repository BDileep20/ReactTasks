import React from "react"
import NavBar from "../component/list/navBar/navBar"
import HomeScreen from "./home-screen"
import { Link } from "react-router-dom"


function SettingScreen(){
    return(
        <div>
           <NavBar/>
     <h3>Wlcome to SettingScreen</h3>
     <Link to={'/'}>
     <button  style={{borderRadius:'5px'}} className="btn btn-success">Back to HomeScreen</button>
     </Link>
     <Link to={'/blog'}>
     <button style={{margin:'10px',borderRadius:'5px'}} className="btn btn-success">Go to BlogScreen</button>
     </Link>
     <Link to={'/about'}>
     <button  style={{margin:'10px',borderRadius:'5px'}} className="btn btn-success">Go to AboutScreen</button>
     </Link>
           
        </div>
    )
}
export default SettingScreen