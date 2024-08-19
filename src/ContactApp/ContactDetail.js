import React from "react";
import user from '../ContactApp/images/alex-suprun-1JGHAAdbL_Y-unsplash.jpg';
import { Link, useLocation } from "react-router-dom";


const ContactDetail = () => {
    const location = useLocation();
    const contact = location.state?.contact;

    console.log("Location State: ", location.state); // Debugging

    if (!contact) {
        return <div style={{ position: 'relative', top: '100px' }}>No contact details available.</div>;
    }

    const { name, email } = contact;

    return (
        <div className="ui main" style={{ position: 'relative', top: '100px' }}>
            <div className="ui card centered">
                <div className="ui image">
                    <img src={user} alt="user" />
                    <div className="ui content" style={{ backgroundColor: 'white', padding: '10px 10px' }}>
                        <div className="ui header">{name}</div>
                        <div className="ui description">{email}</div>
                    </div>
                </div>
                <div className=" ui center-div"  style={{ position: 'relative', left: '20%',padding:'20px' }}>
                    <Link to="/"><button className="ui button blue center " style={{padding:'12px'}}>Back To Contact List</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default ContactDetail;




