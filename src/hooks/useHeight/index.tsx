import { useState, useEffect } from "react";

const useHeight = () => {
    const [isSmallHeight, setIsSmallHeight] = useState(false)
    const [windowHeight, setWindowHeight] = useState<number|null>(null);

    useEffect(() => {
        
        const handleResize = () => {
            const height = window.innerHeight
            setWindowHeight(height);
            if(height<700){
                setIsSmallHeight(true)
            }else{
                setIsSmallHeight(false)
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);


  return {windowHeight, isSmallHeight};
}

export default useHeight;