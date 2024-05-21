import React from "react"
import NavBar from "../component/list/navBar/navBar"
// import UseEffect1 from "../component/functional/useEffect/useEffectEx1"
import LoginForm from "../component/functional/loginform"
import { useNavigate } from "react-router-dom"




function HomeScreen(){
    const routing=useNavigate()
    const navigation=()=>{
        routing('/about')
    
    }
    return(
        <div>
              {/* <h3>Wlcome to HomeScreen</h3> */}
     <NavBar/>
     <LoginForm navigation={navigation}/>
   
    {/* <UseEffect1/> */}
    

           
        </div>
    )
}
export default HomeScreen