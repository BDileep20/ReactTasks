import ImageComponent from "../../image/image"





const Card=(props)=>{
  console.log(props)
  const {title,image,price}=props.products
    return(
      <div style={{display:'flex',direction:'column',justifyContent:'center',boxShadow:'1px 1px 20px 1px',borderRadius:'10px',position:'relative',top:'20px',padding : '30px'}}>
        <div className="card" style={{ width: 250 }}>
           {/* <ImageComponent/> */}
  <img className="card-img-top" style={{height:200,width:200}} src={image} alt="Card image" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text" >${price}</p>
    {/* <a href="#" className="btn btn-primary">
      See Profile
    </a> */}
    </div>
  </div>
</div>


    )
}
export default Card