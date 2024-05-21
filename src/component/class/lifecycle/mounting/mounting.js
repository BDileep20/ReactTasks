import { Component } from "react";
import Card from "../../../list/card/card";
import axios from "axios";




class Mounting extends Component{
    constructor(){
        console.log("constructor")
        super()
        this.state={
            message:"GOOD MORNING",
            products:[],
            dummyproducts:[]

        }
    }
    componentDidMount(){
        //side Effects
        console.log("componentDidMount")
        // fetch('https://fakestoreapi.com/products')
        // .then(res=>res.json())
        // .then(json=>{
        //     this.setState({
        //        products:json 
        //     })
        // })
        this.fetchData()
         
    }
    fetchData=async()=>{
        const result=await axios.get('https://fakestoreapi.com/products');
        
        if(result.status===200){
            this.setState({
                products:result.data,
                dummyproducts:result.data,
                all:result
            })
            // console.log(result.data)
            // console.log(result)
        }
    }
    
  useraction=(Pro)=>{
        const prod= this.state.dummyproducts.filter((ele)=>{
          return ele.category==Pro
   
        })
        this.setState({
            products:prod
        })
  }
  allproducts = () => {
    const updateitems = this.state.dummyproducts.map((ele) => {
      return ele;
    });
    this.setState({
      products: updateitems,
    });
  };
    static getDerivedStateFromProps(){
        // It changes the state based on the props over the time
        console.log("getDerivedStateFromProps")
        return null
    }
    render(){
        
        return(
           
            <div >
                  <div style={{height:'100'}}>
          <button  onClick={() => this.useraction("women's clothing")} className="btn btn-success">women's clothing</button>
          <button style={{margin:'5px'}} onClick={() => this.useraction("jewelery")} className="btn btn-success"> jewelery</button>
          <button style={{margin:'5px'}}  onClick={() => this.useraction("electronics")} className="btn btn-success">electronics</button>
          <button style={{margin:'5px'}}  onClick={() => this.useraction("men's clothing")} className="btn btn-success"> men's clothing</button>
          <button style={{margin:'5px'}}  onClick={() => this.allproducts(this.state.products)} className="btn btn-success">All categories</button>
          
          </div>
          
          
            <>
            {/* <h3>Mounting Phase</h3> */}
            
{/* <div style={{display:'flex',flexWrap:'wrap',gap:'50px'}}> */}
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'50px',width:'100%'}}>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignContent:'center',flexDirection:'row',gap:'10px'}}>
        {
            
           this.state.products.length>0?this.state.products.map((eachproduct,ind)=>{
                return(
                   <>
                   <Card products={eachproduct} key={ind}/>
                  
                    </>
                )

            })
            :<div style={{height:'100px',width:'100px',position:'relative',right:'-500px'}} className="spinner-grow text-muted" />

        
    }
    </div>
    </div>
            </>
           
        </div>
        
        )
    }
}
export default Mounting