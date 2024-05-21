import axios from "axios";
import { Component } from "react";
import CardComponent from "../../list/card/cardcomponent";

    




class FilteredProducts extends Component{
    constructor(){
        super()
        this.state={
            btn:[],
            Products:[],
            dummyproducts:[]

        }
    }
    componentDidMount(){
        this.fetchData()
    }
fetchData=async()=>{
    const response=await axios.get(`https://fakestoreapi.com/products`)
    console.log(response)
    const buttons=response.data.map(each=>each.id)
    console.log(buttons)
    this.setState({
        btn:buttons
    })
}
fetchCardData=async(id)=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(response)
    this.setState({
Products:[response.data]
    })
    
}
render(){
    return(
        <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'50px',backgroundColor:'antiquewhite',gap:'10px'}}>
           
        {

            this.state.btn.map(each=>
                {
                    return(
                    <button style={{border:'white',borderRadius:'5px'}}  key={each} onClick={()=>this.fetchCardData(each)} className="btn btn-success">{each}</button>
                    )
                }
            )
        }
        </div>
       
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
       {
        this.state.Products.length >0&& this.state.Products.map((each)=>{
            return(
         
            <>
             <CardComponent products={each} key={each.id}/>
            </>
            
            )
        })
  


       }
        </div>
        </>
    )

}

}
export default FilteredProducts






