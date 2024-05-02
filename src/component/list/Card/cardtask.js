


const CardComponent=(props)=>{
    const{image,title,category,price,discription,height,width}=props
    return(
        <div  className="card" style={{ width: "15rem" ,
        display :'flex', alignItems:'center',justifyContent:'space-between',margin:'20px',padding:'25px'
        }}>
  <img  src={image} height={220} width={100}  className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-title">category:{category}</p>
    <p className="card-title">Price:{price}</p>
    <p className="card-text">
      {discription}
    </p>
    <a href="#" style={{position:'relative',left:'-5%',padding:'5px 20px'}} className="btn btn-success">
      Details
    </a>
  </div>
</div>

    )
}
export default CardComponent