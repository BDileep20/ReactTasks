import axios from "axios"
import React, { useEffect, useState } from "react"
import { checkArrayLengthExist } from "../../utills/functions"
import CardComponent from "../list/card/cardcomponent"





const UseEffectTask=()=>{
    const [product,setProduct]=useState([])
    const [productId,setProductId]=useState({})
  

useEffect(()=>{
    fetchData()
},[])
useEffect(()=>{
    fetchEachProduct()
},[])


// To fetch the all products
const fetchData=async()=>{
 
     const response=await axios.get('https://fakestoreapi.com/products')
     console.log(response)
     if(response.status===200){
     setProduct(response.data)
 
     }
     
}
const fetchEachProduct=async(id)=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(response)
    if(response.status===200){
    setProductId(response.data)
   
    }
}



return(
  
    <>
    
    
    {
        
        checkArrayLengthExist(product) ? 
        <React.Fragment>
            <div style={{backgroundColor:'gray',display:'flex',alignContent:'center',justifyContent:'center',gap:'20px'}}>
            {
        product.map((each)=>{
           return( <>
            <button style={{border:'white',borderRadius:'10px'}} key={each.id} onClick={()=>fetchEachProduct(each.id)}>{each.id}</button>
            </>
           )
        })
    } 
    </div>
    {productId&&<CardComponent products={productId}/>}
        </React.Fragment>
        :
        <h3>Something went wrong</h3>
    }
    </>


)
}
export default  UseEffectTask
