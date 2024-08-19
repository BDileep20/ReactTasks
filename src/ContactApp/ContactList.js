import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";


const ContactList=(props)=>{
    console.log(props.contact)

    const deleteContact=(id)=>{
       props.getContactId(id)
    }
    const renderContactList=props.contact.map((contact)=>{
        return(
            <>
           <ContactCard  contacts={contact} clickHandler={deleteContact} key={contact.id}/>
           </>
        )
    })
    
   return(
    <div className="main" >
   <h2  style={{position:'relative',top:'80px',fontSize:'40px'}}>Contact List
    <Link to="/add"><button  style={{position:'relative',left:'70%',top:'5px',padding:'10px'}} className="ui button blue " >Add Contact</button></Link>
   </h2>
    <div  className="ui celled list" >{renderContactList}</div>
    </div>
   )
}
export default ContactList