import { Link, NavLink } from "react-router-dom"
import AboutScreen from "../../../screens/about-screen"
import HomeScreen from "../../../screens/home-screen"




const NavBar=()=>{
    const dark=true
    const linkStyles={
      textDecoration:"none",
      color:"white"

    }
    return(
        <nav 
        class={dark ?"navbar navbar-expand-sm bg-dark navbar-dark":"navbar navbar-expand-sm bg-light navbar-light"}
        // className="navbar navbar-expand-sm bg-light navbar-light
        >
  <div className="container-fluid">
    <ul className="navbar-nav">
    <li className="nav-item nav-link">
      <Link to={"/"} style={linkStyles}>
         Home
         </Link>
      </li>
      <li className="nav-item nav-link">
        <Link to={"/about"} style={linkStyles}>
          </Link>
      </li>
      <li className="nav-item nav-link">
        <Link to={"/settings"} style={linkStyles}>
         Setting
         </Link>
      </li>
      <li className="nav-item nav-link">
        <Link to={'/blog'} style={linkStyles}>
          Blog
          </Link>
      </li>
      
    </ul>
  </div>
</nav>

    )
}
export default NavBar