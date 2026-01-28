import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const Productdetails = () => {

  const[product,setProduct]=useState(null);
  const {id}=useParams();

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response)=> response.json())
      .then((data)=>{
        console.log(data);
        setProduct(data);
      })
      .catch((err)=>console.log(err))
  },[id]);

  if (!product){
    return <h2>Loading....</h2>
  }


  return (
    <div>
        <h1>Product Details</h1>

        <h2>Name: {product.title}</h2> 
        <img src={product.image} width="200" height="200" style={{objectFit:"contain"}}/>

        <h2>Price: ${product.price}</h2>

        <h2>Description: {product.description}</h2>

        <h2>Category:  {product.category}</h2>

        <h4>
            Rating: ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </h4>
    </div>
  )
}

export default Productdetails
