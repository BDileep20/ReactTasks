import { Carousel } from "react-bootstrap"





export const CardComponent=(props)=>{
console.log(props)
    const {title,image,price}=props.products
    return(
    <>
    <div className="card" style={{border:'1px solid white',padding:'30px',width:'290px',boxShadow:'1px 1px 10px 1px',position:'relative',top:'20px'}}>
  <div className="card-body">
  <img src={image} height={200} width={200}></img>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">${price}</p>
   
    {/* <a href="#" className="card-link">
      Card link
    </a> */}
    {/* <a href="#" className="card-link">
      Another link
    </a> */}

  </div>
</div>

    
    
    </>
    )
}
export default CardComponent