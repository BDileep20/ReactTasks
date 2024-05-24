import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import { checkArrayLengthExist, checkObjectEmpty } from "../../../utills/functions"
import ImageComponent from "../../image/image"
import { Link } from "react-router-dom"




const UseEffect1=()=>{
    const [todos,setTodos]=useState([])
    const [count,setCount]=useState(1)
    const [eachTodo,seteachtodo]=useState({})

// useEffect  will trigger once (fetch data from server)
    useEffect(()=>{
        fetchData()
    },[])

    // useEffect will trigger every when array value changes
    // useEffect(()=>{
    //     document.title=`count ${count}`
    //     fetchEachTodo()
    // },[count])

    // To fetch all the todos from server
    const fetchData=async()=>{
        const result=await axios.get('https://dummyjson.com/products')
        console.log("result",result)
        if(result.status===200){
            setTodos(result.data.products)
        }
    }

// This function is  to fetch todo based on the current count
// const fetchEachTodo=async()=>{
//     const result=await axios.get(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         console.log("result",result)
//         if(result.status===200){
//             seteachtodo(result.data)
//         }
// }

    // const handleIncrement=()=>{
    //     setCount(count+1)
    // }
    
return(
    <>

    {/* <h3>use Effect example</h3>

{
    
    checkObjectEmpty(eachTodo) ? <>
    <h3>{eachTodo.title}</h3>
    </>:
    null
    
}
    <h3>{count}</h3> */}
    {/* <button onClick={handleIncrement}>Count Increment</button> */}
    {
        checkArrayLengthExist(todos) ? 
        <>
        {
        todos.map(eachTodo=>{
            return(
        
                <React.Fragment key={eachTodo.id}>
                <h3>{eachTodo.title}</h3>
                <ImageComponent   src={eachTodo.thumbnail} />
                <button>
                    <Link to={`/${eachTodo.brand}/${eachTodo.id}`}>
                    Click to view product
                    </Link>
                </button>
                </React.Fragment>
            )
        })
         }
        </>
        :
        null
    }
    </>
)
}
export default UseEffect1