// import { Component } from "react";
import React from "react"
// import "./heading.css"
import sathish from "./heading.module.css"


// class Heading extends Component{
//     render(){
//         return (
//             // <h1>hello good morning</h1>
//             <table class="custom-table">
//                 <tr>
//                     <th>hello</th>
//                     <th>hello</th>
//                 </tr>
//             </table>
//         )
//     }
// }
// export default Heading



// const Heading =()=>{
//     return <h1 style={ {
//             color:"red",
//             backgroundColor:"black"
       
//         }} >Welcome</h1>
// }
// export default Heading


const Heading =()=>{

//    const headingstyle= {
//         color:"red",
//         backgroundColor:"black"
   
//     }
    return <><h1 className="heading-Style">Welcome</h1>
    <h1 className={sathish.myStyle}>Welcome</h1>
    <h1 className={sathish.my}>Welcome</h1>
    <h1 className={sathish.style}>Welcome</h1>
    </>
}
export default Heading