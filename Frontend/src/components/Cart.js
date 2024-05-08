import React from 'react'
import { useSelector } from 'react-redux'
import { useGetAllProductsQuery } from '../Features/ProductsAPI'
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cart)
  const { data, error, isLoading } = useGetAllProductsQuery();


  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart empty"> 
         <p>Your cart is currently empty</p>
         <div className="start-shopping">
          <Link to="/">Go back to home</Link>
         </div>
         </div>
      ) : (

        data?.map((item) => {
          return (
            <>
          <p>{item.name}</p> 
          <p>{item.cartQuantity}</p>
          <p>{item.price}</p>
          </>
          )

        })

      )}

    </div>
  )


}

export default Cart