import { useState } from 'react';
import './index.scss';

function ImageCarousel(){
    const images = Object.keys(import.meta.glob("../images/*.{jpg,jpeg,png,svg}", { eager: true }));
    const imageLen = images.length;

    const [carouselPointer, setCarouselPointer] = useState(0);

    const previousHandler = () => {
        setCarouselPointer((prev) => {
            if(prev-1 < 0) return imageLen-1;
            return ( prev-1)%imageLen;
        })
    }

    const nextHandler = () => {
        setCarouselPointer((prev) =>( prev+1)%imageLen);
    }

    return (
        <div className="carousel">
            <button onClick={previousHandler}>{'<'}</button>
            <div className='image'>
                <img src={images[carouselPointer]}/>
            </div>
            <button onClick={nextHandler}>{'>'}</button>
        </div>
    )
}

export default ImageCarousel;