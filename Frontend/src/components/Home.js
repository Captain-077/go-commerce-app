import React from 'react'
import Navbar from './Navbar'
import { useGetAllProductsQuery } from '../Features/ProductsAPI'

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery()
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
                  <button>Add to cart</button>
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