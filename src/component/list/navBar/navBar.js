



const NavBar=()=>{
    const dark=true
    return(
        <nav 
        class={dark ?"navbar navbar-expand-sm bg-dark navbar-dark":"navbar navbar-expand-sm bg-light navbar-light"}
        // className="navbar navbar-expand-sm bg-light navbar-light
        >
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">
          Disabled
        </a>
      </li>
    </ul>
  </div>
</nav>

    )
}
export default NavBar