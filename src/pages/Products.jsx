import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Products = () => {

  const [products,setProducts]=useState([])
  useEffect(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())   
            .then((data)=>setProducts(data))
            .catch((err)=>console.log(err));
  },[]);

  return (
    <>
      <div>
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <h5>$ {product.price}</h5>
            <img src={product.image} width="150" height="150"/>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
