import React from 'react'
import './HomeScreen.css';
import products from '../data';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  return (
    <div className='products__wrapper'>
      {products.map((product) => <ProductCard key={product._id} product={product}/>)}
    </div>
  )
}

export default HomeScreen;
