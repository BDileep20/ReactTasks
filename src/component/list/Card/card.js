import ImageComponent from "../../image/image"





const Card=()=>{
    return(
        <div className="card" style={{ width: 300 }}>
           <ImageComponent/>
  {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image" /> */}
  <div className="card-body">
    <h4 className="card-title"> Royal Challengers Bangalore</h4>
    <p className="card-text" >Royal Challengers Bangalore, officially Royal Challengers Bengaluru </p>
    <a href="https://www.royalchallengers.com/" className="btn btn-primary">
      See Profile
    </a>
  </div>
</div>

    )
}
export default Card