import { useState } from "react"








const LoginForm=({navigation})=>{

const [userName,setUserName]=useState('')
const [userPassword,setPassword]=useState('')
const [passwordError,setPasswordError]=useState(false)
const [userNameError,setUserNameError]=useState(false)
const [loginErrorMessage,setLoginErrorMessage]=useState(null)
const [Login,setlogin]=useState(false)

const userNameHandler=(event)=>{
    const username=event.target.value;
    setUserName(username)
    if(username.length>10){
        // alert('please enter less than 10 characters')
        setUserNameError('please enter less than 10 characters')
    }else{
        setUserNameError('')
        console.log(username)
    }
   

}
const userPasswordHandler=(event)=>{
    const password=event.target.value;
    console.log(password);
    setPassword(password)
    if(password.length>10){
        // alert('please enter less than 10 characters')
        setPasswordError('Password must be less than 10 characters')
    }else{
      setPasswordError('')
        console.log(password)
    }
   

}
    const onFormSubmit=(event)=>{
    
        event.preventDefault()
        const userInfo={
            username:userName,
            password:userPassword
        }
        serverlCall(userInfo)
        console.log(userInfo,"user info")

    }
    const serverlCall=(userInfo)=>{
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(response=>{
        if(response.message){
          setLoginErrorMessage(response.message)
        }
        else{
          //success
          setLoginErrorMessage(null)
          alert('login successfull')
          success()
          navigation()
        }
      });
    }
    const success=()=>{
     debugger
      setlogin(true)
    }
    // {
          
    //   username: 'kminchelle',
    //   password: '0lelplR',
    //   expiresInMins: 30
    // }
    return(
        <>
        {
          Login?
          <>
          <h3>welcome user</h3>
        </>
        :
       <form style={{border:'1px solid white',width:'40%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',boxShadow:'0px 0px 20px 0px',borderRadius:'10px',marginLeft:'30%',marginTop:'5%'}} onSubmit={onFormSubmit}>
        <h2 style={{margin:'5%',display:'flex',justifyContent:'center'}}>login page</h2>
    
  <div style={{width:'60%'}} className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      value={userName}
      onChange={userNameHandler}
    />
    {
        userNameError&&
        <span style={{color:'red'}}>{userNameError}</span>
    }
  </div>
  <div style={{width:'60%'}} className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      value={userPassword}
      onChange={userPasswordHandler}
    />
     {
        passwordError&&
        <span style={{color:'red'}}>{passwordError}</span>
    }
  </div>
   {
        loginErrorMessage&&
        <span style={{color:'red'}}>{loginErrorMessage}</span>
    }
  {!userNameError && !passwordError && <button  style={{marginBottom:'5px'}} type="submit" className="btn btn-success">
    Submit
  </button>
}
{/* {
   <button onClick={()=>navigation()} style={{marginBottom:'5px'}} type="submit" className="btn btn-success">
  Submit
</button>
} */}

</form>
}


        </>
    )
}

export default LoginForm