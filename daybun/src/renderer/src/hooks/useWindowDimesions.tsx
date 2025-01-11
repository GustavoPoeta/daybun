import { useState, useEffect } from "react";

interface windowDimensions {
    width: number,
    height: number
}

export default function useWindowDimensions (): windowDimensions {

    const [dimensions, setDimensions] = useState<windowDimensions>({

        width: window.innerWidth,
    
        height: window.innerHeight,
    
      });
    
    
      useEffect(() => {
    
        const handleResize = () => {
    
          setDimensions({ width: window.innerWidth, height: window.innerHeight });
    
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
    
      }, []);
    
    
      return dimensions;
}