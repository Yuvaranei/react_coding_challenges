import { useState } from "react";
import { useEffect, useRef } from "react";
import './index.scss';

export default function Histogram(){
    const [yearData, setYearData] = useState(new Map());

    async function fetchData(){
        const resp = await fetch('https://www.random.org/integers/?num=200&min=1950&max=2019&col=1&base=10&format=plain');
        let yearResp = await resp.text();
        
        const yearArr = yearResp.split('\n');
        let map = new Map();

        yearArr.map((year) => {
            if(year != ''){
                let yearPOint = Math.floor(Number(year)/10) * 10;
                if(!map.has(yearPOint)) map.set(yearPOint, 1);
                else map.set(yearPOint, map.get(yearPOint)+1);
            }
        })

        setYearData(map);
    }

    useEffect(()=>{
        fetchData();
        },[]);

    console.log(yearData);

    return (
        <div className="container">
            <div className="yaxis-container">
                {
                    Array.from({length:5}, (_, i) => i+1).reverse().map((item) => {
                        return <div className="yAxis-item">{item * 10}</div>
                    })
                }
                <div className="yAxis-item">{0}</div>
                <div className="yAxis-item">{}</div>
            </div>
            <div className="main-container">
                    <div className="main-chart">
                        {
                           [...yearData.values()].map((item) => {
                                return <div className="main-chart-item" style={{height: `${(item/50)*100}%`}}></div>
                            })
                        }
                    </div>
                    <div className="xaxis-container">
                        {
                            [...yearData.keys()].sort().map((item) => {
                                return <div className="xAxis-item">{item}</div>
                            })
                        }
                    </div>
            </div>
        </div>
    )
   
}