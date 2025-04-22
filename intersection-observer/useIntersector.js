import { useEffect, useState } from "react";

export function useIntersector(ref){
    const [intersector, setIntersector] = useState(null);

    const callbackHandler = (entries) => {
        setIntersector(entries[0]);
    }

    useEffect(() => {
        if(ref.current && typeof IntersectionObserver == 'function'){
            const observer = new IntersectionObserver(callbackHandler, {
                threshold: 0.5
            })
            observer.observe(ref.current);
            return () => {observer.disconnect()}
        }
    })

    return intersector;
}