import { useState, useEffect, useCallback } from "react";

export function useFetch(url){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchMore = () => {
        if(!loading){
            setPage((prevPage) => prevPage+1);
            setLoading(true);
        }
    }

    useEffect(() => {
        async function fetchData(){
          const response =  await (await fetch(`${url}?limit=6&skip=${page*6}`)).json();
          setData((prevData) => [...prevData, ...response.recipes]);
          setLoading(false);
        }
        fetchData();
      }, [page])

      return {data, loading, fetchMore};
}