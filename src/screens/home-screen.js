// import React from "react"
// import NavBar from "../component/list/navBar/navBar"
// import UseEffect1 from "../component/functional/useEffect/useEffectEx1"
// import LoginForm from "../component/functional/loginform"
// import { useNavigate } from "react-router-dom"




// function HomeScreen(){
//     const routing=useNavigate()
//     const navigation=()=>{
//         routing('/about')
    
//     }
//     return(
//         <div>
//               {/* <h3>Wlcome to HomeScreen</h3> */}
//      <NavBar/>
//      {/* <LoginForm navigation={navigation}/> */}
   
//     <UseEffect1/>
    

           
//         </div>
//     )
// }
// export default HomeScreen



import React, { useEffect, useState } from "react";
import NavBar from "../component/list/navBar/navBar";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Import the custom CSS file

function HomeScreen() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const goToDetailPage = (id) => {
        navigate(`/product/${id}`);
    };
 

    return (
        <div className="home-screen">
            <NavBar />
            <div className="container my-5">
                <div className="row" >
                    {products.map((product) => (
                        <div className="col-md-3" key={product.id}>
                            <div className="rotate">
                            <div className="card mb-4 shadow-sm">
                                <img src={product.thumbnail} className="card-img-bottom" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                    <button className="btn btn-primary" onClick={() => goToDetailPage(product.id)}>View Details</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;


