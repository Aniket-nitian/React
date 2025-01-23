//name export
export const Product = ({product})=>{
  const {image,title,rating,price} = product;
  return (
    <div className='product' >
      <img className='product-image' src= {image} />
      <h1>{title}</h1>
      <p>{rating.rate} ratings</p>
      <p>Price: {price}</p>
    </div>
  )
}

