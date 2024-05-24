// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { checkObjectEmpty } from '../utills/functions';

// function ProductDetails() {
//     const {productID}=useParams()
//    const [eachProduct,setEachProduct]=useState({})

//     useEffect(()=>{
//        fetchEachProduct()
//     },[productID])

//     const fetchEachProduct= async()=>{
//     const result=await axios.get(`https://dummyjson.com/products/${productID}`)
    
//     setEachProduct(result.data)
//     }
//   return (
//     <div>
//         {
//         !checkObjectEmpty(eachProduct) ?<h3>Data loading... please wait</h3>:<h3>{eachProduct?.title}</h3>
// }
//     </div>
//   )
// }

// export default ProductDetails



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { checkObjectEmpty } from '../utills/functions';
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Create and import a custom CSS file for styles

function ProductDetails() {
  const { productID } = useParams();
  const [eachProduct, setEachProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [imageChange ,setChangeImage] = useState("")
  const navigation = useNavigate();

  useEffect(() => {
    fetchEachProduct();
  }, [productID]);

  const  homeRouting=()=>{
    navigation('/')
}
const changeImage=(img)=>{
setChangeImage(img)

}
  const fetchEachProduct = async () => {
    try {
      const result = await axios.get(`https://dummyjson.com/products/${productID}`);
      setEachProduct(result.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container className="product-details">
      <Row>
        <Col md={6}>
          <Card >
            <Card.Img className='sizeChange' variant="top" src={imageChange ?imageChange: eachProduct.thumbnail} alt={eachProduct.title} />
            <Card.Body>
              <Row>
                {eachProduct.images.map((img, index) => (
                  <Col xs={3} key={index}>
                    <img onClick={()=>{changeImage(img)}} src={img} alt={eachProduct.title} className="img-fluid" />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <div className="details">
            <h2>{eachProduct.title}</h2>
            <p>{eachProduct.description}</p>
            <div className="price">
              <span>${eachProduct.price.toFixed(2)}</span>
              <span className="discount">({eachProduct.discountPercentage}% off)</span>
            </div>
            <div className="rating">
              <span>Rating: {eachProduct.rating}</span>
            </div>
            <div className="stock">
              {eachProduct.stock > 0 ? `In Stock (${eachProduct.stock})` : 'Out of Stock'}
            </div>
            <div className="brand-category">
              <span>Brand: {eachProduct.brand}</span>
              <br />
              <span>Category: {eachProduct.category}</span>
            </div>
            <div className="actions">
              <Button style={{margin:'10px'}} variant="primary" className="mr-2">Add to Cart</Button>
              <Button style={{margin:'10px'}} variant="success">Buy Now</Button>
              <Button  style={{margin:'10px'}} onClick={homeRouting} variant="danger" >Back to HomeScreen</Button>
              {/* <button className="mr-2" variant="success"></button> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;










