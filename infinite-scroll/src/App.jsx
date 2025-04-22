import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const flag = useRef(false);

  async function fetchProduct(){
    console.log("page = ", page);
   return await (await fetch(`https://dummyjson.com/products?limit=35&skip=${page*35}`)).json();
  }

  function throttleCalls(){
    if(!flag.current){
      flag.current = true;
      setTimeout(() => {
        console.log("Set page initiated..");
        if(page <= 2){
          setPage((prevPage) => prevPage+1);
          flag.current = false;
        }
        
      }, 1000);
    }
  }

  useEffect(() => {

  function handleScroll(){
    if(window.innerHeight +window.scrollY + 400 >= document.body.offsetHeight ){
      console.log("handleScroll");
      throttleCalls();
    }
  }

    window.addEventListener('scroll', handleScroll);
  })

  useEffect(() => {
    async function fetchData(){
     const product = await fetchProduct();
     setProductData(product.products);
    }
    fetchData();
  }, [])

  useEffect(() => {
    async function fetchData(){
     const product = await fetchProduct();
     setProductData((prevData) => [...prevData,...product.products]);
    }
    fetchData();
  }, [page])

  console.log("productData...", productData);

  return (
    <div className='product-wrapper'>
      {
        productData?.map(product => {
          return (
            <div className='product-container' key={product.id}>
              <div className='product-title'>{product.title}</div>
              <img src={product.images[0]} className='product-img'/>
              <div className='product-price'>{product.price}</div>
              <button className='add-to-cart'>Add to cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
