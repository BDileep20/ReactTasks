import React from "react";
import { Link } from "react-router-dom";


class AddContact extends React.Component{
    state={
        name:"",
        email:""
    }
    add=(e)=>{
        e.preventDefault()
        if(this.state.name===" " || this.state.email===" "){
            alert('all fields are manditory')
            return;
        }
        this.props.AddContactHandler(this.state)
        this.setState({name:"",email:""})
        console.log(this.props)
    }
    render(){
        return(
            <div className="ui main" style={{position:'relative',top:'100px'}}>
                
                <h2 style={{position:'relative',top:'10%'}}>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                    <label>Name</label>
                    <input value={this.state.name}style={{padding:'20px'}} type="text" name="name" placeholder="Name" onChange={e=>this.setState({name:e.target.value}) }/>
                    </div>
                    <div className="field">
                    <label>Email</label>
                    <input  value={this.state.email} style={{padding:'20px'}} type="text" name="email" placeholder="Email"onChange={e=>this.setState({email:e.target.value})}/>
                    <br></br><br></br>
                   <button className="ui button blue">Add</button>
                   <Link to='/'><button className="ui button blue">Contact List</button></Link>

                    </div>
                </form>
            </div>
        )
    }

}
export default AddContact