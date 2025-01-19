import { createContext } from 'react';
import { useState } from 'react';

interface ContextType {
    navWidth: number,
    setNavWidth: (width: number) => void
}

const contextDefaultValues: ContextType = {
    navWidth: 0,
    setNavWidth: () => {}
};

export const Context = createContext(contextDefaultValues);


export default function ContextProvider ({children}): JSX.Element { 
    const [navWidth, setNavWidth] = useState<number>(contextDefaultValues.navWidth);
    
    return (
        <Context.Provider value={{ navWidth, setNavWidth }}>
            {children}
        </Context.Provider>
    );
};
