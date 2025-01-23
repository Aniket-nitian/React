import { useEffect, useState } from "react";
import { Product } from "./Product";
import { Skeleton } from "./Skeleton";


export const ProductCard = ()=>{
        const [listOfProduct,setlistOfProduct]= useState([]);
        const [filterproduct, setfilterproduct] = useState([]);
        const [SearchText,setSearchText] = useState("");

        useEffect(()=>{
              fetchData();
         },[]);

         const fetchData = async ()=>{
          const data = await fetch("https://fakestoreapi.com/products/");
          const result = await data.json();
          setlistOfProduct(result);
          setfilterproduct(result);
         }

         //conditional rendering
        //  if(listOfProduct.length===0){
        //   return <Skeleton/>
        //  }

  return listOfProduct.length === 0 ? <Skeleton/> : (
   
   <div>
       <div style={{"marginTop":"10px"}}>
         <input type="text" onChange={(e)=>{
           setSearchText(e.target.value);
         }
         } value={SearchText}/>
         <button onClick={()=>{
          const filterdata = listOfProduct.filter((product)=>{
            return product.title.toLowerCase().includes(SearchText.toLowerCase());
          })
          setfilterproduct(filterdata)
         }}>Search</button>
   </div>


      <button onClick={()=>{
  
        const filteredproduct = listOfProduct.filter(product=>product.rating.rate>=4)
        setfilterproduct(filteredproduct);

        }} style={{"marginTop":"10px"}}>Top Rated Product
      </button>

    <div className='product-card'>{
        filterproduct.map((product)=>{
          return(
            <Product key={product.id} product = {product}   />
          )
        })
      } 
    </div>
    </div>
  )
}




//react provide functionality and it will be access by HOOKS --> useState, useEffect, useContext, useReducer

//productData will be assign to listOfProduct(local state variable)
  //setlistOfProduct is a function which will update the listOfProduct

//listOfProduct is a state variable