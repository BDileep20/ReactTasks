import React from "react";
import { useParams, useNavigate } from "react-router-dom";


const DeletePage = ({ deleteContact }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        if (deleteContact) {
            deleteContact(id); 
            navigate('/'); 
        } else {
            console.error('deleteContact function is not available.');
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="ui main" style={{ position: 'relative', top: '100px' }}>
            <div className="ui card centered">
                <div className="ui content" style={{ backgroundColor: 'white', padding: '10%'}}>
                    <h2>Are you sure you want to delete this contact?</h2>
                    <button className="ui button blue" onClick={handleDelete}>Yes, Delete</button>
                    <button className="ui button" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeletePage;



