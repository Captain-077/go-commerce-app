import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllProductsQuery } from '../Features/ProductsAPI'
import { Link } from 'react-router-dom';
import { removeFromCart } from "../Features/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart)
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch()

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>
              <span>Start Shopping</span>
            </Link>
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
              return <div className="cart-item" key={item.id}>
                <div className="cart-product">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <button onClick={() => (handleRemoveFromCart(item))}>Remove</button>
                  </div>
                </div>

                <div className="cart-product-price">
                  ${item.price}
                </div>

                <div className="cart-product-quantity">
                  <button>-</button>
                  <div className="count">{item.cartQuantity}</div>
                  <button>+</button>
                </div>

                <div className="cart-product-total-price">${item.cartQuantity * item.price}</div>
              </div>

            })}
          </div>


          <div className="cart-summary">
            <button className="clear-cart">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>

              <div className="continue-shopping">
                <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>

            </div>
          </div>

        </>


      )}

    </div>
  )


}

export default Cart