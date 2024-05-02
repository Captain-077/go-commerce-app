import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { useGetAllProductsQuery } from '../Features/ProductsAPI'

function Home() {
  const {data,error,isLoading} = useGetAllProductsQuery()
  return (
    <>
    <div>Home</div>
   
    </>
  )
}

export default Home