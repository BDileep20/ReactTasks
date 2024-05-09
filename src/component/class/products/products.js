import axios from "axios";
import { Component } from "react";
import CardComponent from "../../list/card/cardcomponent";







class ProductListning extends Component{
    constructor(){
        super()
        this.state={
            products:[],
            categories:[],
            loading:false
        }
    }
    componentDidMount(){
        this.fetchData()
        // this.filterButton()
        this.fetchCategory()
       
    }
fetchData=async()=>{
    this.setState({
        loading:true
    })
        const response=await axios.get('https://fakestoreapi.com/products')
        console.log(response)
        if(response.status===200){
            this.setState({
                products:response.data,
                loading:false
            })
                
            }else{
                alert("Somthing Went Wrong")
            }
    
    }
fetchCategory=async(each)=>{

const {data}=await axios.get(`https://fakestoreapi.com/products/categories`)
const newcategoryList=[...data,"All"]
this.setState({
    categories:newcategoryList
})
    
}
filterButton=async(selected)=>{
    this.setState({
        loading:true
    })
    if(selected==="All"){
        this.fetchData()
    // console.log(selected)
    }
    else{
    const response=await axios.get(`https://fakestoreapi.com/products/category/${selected}`)
    // console.log(categoryList)
    this.setState({
        products:response.data,
        loading:false
    })
}
}
    render(){
        return(
          <>
          {
            
            this.state.categories.length>0 &&this.state.categories.map((each)=>{
                return(
                    <button onClick={()=>this.filterButton(each)}>{each}</button>
                )

            })
            
            // <div style={{height:'100px',width:'100px',position:'relative',right:'-500px'}} className="spinner-grow text-muted" />  
              

          }
          {/* <button onClick={()=>this.fetchData()}>All</button> */}

          <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            {
                
              !this.state.loading? (this.state.products.map((eachproduct,ind)=>{
        const {image}=eachproduct
                return(
                    <>
                    <CardComponent products={eachproduct} key={ind}/>
                    
                    </>
                )

            
              })
              )
              :
              <div style={{height:'100px',width:'100px',position:'relative',right:'-500px'}} className="spinner-grow text-muted" />  
              
            }
            </div>
          </>
          
        )
    
    }
}
export default ProductListning