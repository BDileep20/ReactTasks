import { Component } from "react";


class Counter extends Component{
    state={
       products:[{
        id:1,
        title:"Laptop",
        image:"https://imgeng.jagran.com/images/2023/mar/best%20laptops1679305053832.jpg",
        Count:1,
    },
    {
        id:2,
        title:"MotoRola-edge",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/q/2/edge-40-neo-payj0001in-motorola-original-imagtkf5ewhafvhh.jpeg?q=70",
        Count:1,
       },
       {
        id:3,
        title:"Samsung-TV",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/television/o/d/s/-original-imahygbg8vwnzpgu.jpeg?q=70",
        Count:1,
        
       },
       {
        id:4,
        title:"boAt-AirDops",
        image:"https://rukminim2.flixcart.com/image/300/300/xif0q/headphone/5/g/7/-original-imagqhswqrx7sn3w.jpeg?q=90",
        Count:1,
        
       },
       {
        id:5,
        title:"Smart-Watch",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/w/e/q/-original-imagq425shghrgzz.jpeg?q=70",
        Count:1,
       },
       {
        id:6,
        title:"Water-Purifier",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/water-purifier/e/w/p/m2-needs-no-service-for-2-years-10-stage-purification-native-by-original-imahygdfzh9se4ug.jpeg?q=70",
        Count:1,
       },
       {
        id:7,
        title:"i-Phone15",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
        Count:1,
       },
       {
        id:8,
        title:"Lenovo",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/i/x/-original-imahyfx77g4cxt75.jpeg?q=70",
        Count:1,
       },
]

    }
   changAction=(Action,id)=>{

    switch(Action){

        case "Increment": 
        const inc=this.state.products.map((each)=>{
            if(each.id==id){
                each.Count+=1
                return each
            }else{
                return each
            }

        })
        this.setState({
           products:inc
        }) 

        break;
        case "Decrement":
            const dec=this.state.products.map((e)=>{
                if(e.id==id){
                    if(e.Count>0){
                    e.Count-=1
                    return e
                    }
                    else{
                        return e
                    }  
                }else{
                    return e
                }

            })
            this.setState({
                products:dec
            }) 
        

        break;
        default:
            break;

    }

 }
    render(){
        return(
        <>
        <div style={{flexDirection:"row",flex:1,display:"flex",flexWrap:"wrap",alignItems:'center'}} >
         {this.state.products.map((each)=>{
          const {image,title,Count,id}=each
            return(
             <>
                
         <div style={{border: '1px solid white', borderRadius: '9px', padding: '20px', width: '280px',margin:'10px',boxShadow:'1px 1px 20px 1px',}}>
        <img src={image} height={200} width={200} alt="Product Image" />
        <h4>Title: {title}</h4>
        <div  style={{ display:'flex',justifyContent:'center',margin:'10px' } }>
            <button style={{ padding: '4px 10px' }} onClick={() => this.changAction("Increment", id)}>+</button>
            <span style={{ position: 'relative', left: '0px', border: '2px solid black', padding: '4px 10px' }}>{Count}</span>
            <button style={{ padding: '4px 10px' }} onClick={() => this.changAction("Decrement", id)}>-</button>
        </div>
        </div>


                </>
            )
         })}   
       
        </div>
        </>
        
        )
    }
    
}
export default Counter