import { useEffect, useState } from "react";

function DisplayIdAndStatus(){

    const [data, setData] = useState([]);

    
    async function fetchData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const jsonResp = await response.json();
        return jsonResp;
    }

    useEffect(() => {
        async function fetchDataResp(){
            const data = await fetchData();
            setData(data);
        }

        fetchDataResp();

    }, [])

    const generateData = () => {
        return data.map(({id, completed}) => (
            <li key={id}>
                {id} : {completed ? 'true' : 'false'}
            </li>
        ));
    }

    console.log("data .. ", data);
    return (
        <ul>
            {generateData()}
        </ul>
    )
}

export default DisplayIdAndStatus;