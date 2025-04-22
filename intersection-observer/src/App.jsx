import './App.css'
import { useFetch } from '../useFetch'
import { useRef } from 'react';
import { useIntersector } from '../useIntersector';
import { useEffect } from 'react';

function App() {
  const {data, loading, fetchMore}= useFetch('https://dummyjson.com/recipes');
  const loaderRef = useRef(null);
  const intersector = useIntersector(loaderRef);

  useEffect(() => {
    if(intersector?.isIntersecting){
      fetchMore();
    }
  }, [intersector])


  if(loading && !data.length){
    return <div>Loading....</div>
  }

  return (
    <div>
      {
        data?.map(item => {
          return <img src={item.image} key={item.id} className="img"/>
        })
      }
      <div ref={loaderRef} className="loader-div">Scroll down to load more</div>
    </div>
  )
}

export default App
