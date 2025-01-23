import { useEffect, useState } from "react";
import { Skeleton } from "./Skeleton";
import { useParams } from "react-router-dom";

const productDetail = () => {
  const [singleproduct, setSingleProduct] = useState(null);
  const {productId} = useParams();

useEffect(()=>{
      fetchData();
      console.log(singleproduct);
})

const fetchData = async () => {
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const result= await data.json();
  setSingleProduct(result);
}

  return singleproduct===null ? <Skeleton/> : (
    <div className='product' >
       <div className='product' >
      <img className='product-image' src= {singleproduct.image} />
      <h1>{singleproduct.title}</h1>
      <p>{singleproduct.rating.rate} ratings</p>
      <p>Price: {singleproduct.price}</p>
      <p>{singleproduct.description}</p>
    </div>
    </div>
    )
}

export default productDetail;