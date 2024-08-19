import React from "react";
import user from '../ContactApp/images/user.png'
import { Link } from "react-router-dom";

const ContactCard=(props)=>{
    const {id,name,email}=props.contacts
    console.log(props.contacts)
    return(
        <div   className="item" style={{position:'relative',top:"80px",padding:'0px'}} >
            <img  className="ui avatar imagge" style={{position:'relative',right:'20px',top:'20px'}} src={user} height={60} width={60} alt="user" ></img>
               <div  className="contact">
               <Link
          to={`/contact/${id}`}
          state={{ contact: props.contacts }} // Pass the contact object in state
        >
          <div
            className="header"
            style={{
              fontSize: "20px",
              position: "relative",
              left: "50px",
              bottom: "20px",
            }}
          >
            {name}
          </div>
          <div style={{ position: "relative", left: "50px", bottom: "20px" }}>
            {email}
          </div>
        </Link>
        </div>
            <Link to={`/delete/${id}`} style={{ position: 'relative', left: '1050px', bottom: '30px' }}>
                <i style={{ fontSize: '25px', color: 'red' }} className="trash alternate outline icon"></i>
            </Link>
        </div>
    )
}
export default ContactCard

