import { useState, useEffect } from "react";


interface mousePosition {
    x: number | null,
    y: number | null
}

export default function useMousePosition (): mousePosition{
    
    const [mousePosition, setMousePosition] = useState<mousePosition>({
        x: null, y: null
    })

    useEffect(() => {
        const updateMousePosition = (event: MouseEvent) => {
            setMousePosition({x: event.clientX, y: event.clientY})
        };

        document.addEventListener("mousemove", updateMousePosition);

        return () => {
            document.removeEventListener("mousemove", updateMousePosition);    
        };
        
    }, []);

    
    return mousePosition;
}