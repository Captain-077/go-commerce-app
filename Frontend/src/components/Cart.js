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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
            </svg>
          </div>
        </div>
      ) : (
        <>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>

          </div>

          <div className="cart-items">
            {cart?.cartItems?.map((item) => {
             return <div className="cart-items" key={item.id}>
                <p>{item.name}</p>

              </div>



            })}
          </div>
        </>


      )}

    </div>
  )


}

export default Cart