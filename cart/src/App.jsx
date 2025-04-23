import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import Cart from './cart';
import { addItemToCart } from './reducers/cart.reducer';

function App() {
  const productInfo = useSelector((state) => state.cart.productInfo);

  const dispatch = useDispatch();

  const products = productInfo.values();

  const addToCart = (productId, quantity) => {
    dispatch(addItemToCart({productId, quantity }));
  }

  return (
    <div className='app'>
      <div className='products'>
      {products.map(item => <div key={item.id}>{item.name} <button onClick={() => addToCart(item.id, 1)}>Add to cart</button></div>)}
      </div>
      <Cart/>
    </div>
  )
}

export default App
