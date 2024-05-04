import React from 'react'
import Navbar from './Navbar'
import { useGetAllProductsQuery } from '../Features/ProductsAPI'
import {useDispatch} from "react-redux";
import { addToCart } from "../Features/cartSlice";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery()
  const Dispatch = useDispatch()
  const handleAddToCart = (product) => {
    Dispatch(addToCart(product))
  }

  // const {items,status} = useSelector(state => state.products) <--used with Async thunk-->
  return (
    <>
      <div className="home-container">
        {isLoading ? <p>Loading...</p> : error ? <p>An Error Occured...</p> :

          <>
            <h2>New Arrivals</h2>

            <div className="products-section">
              {data?.map((product) => {
                return (
                <div key={product.id} className='product-item'>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className='price'>${product.price}</span>
                  </div>
                  <button onClick = {() => handleAddToCart(product)}>Add to cart</button>
                </div>
                )
              })}


            </div>
          </>

        }
      </div>

    </>
  )
}

export default Home