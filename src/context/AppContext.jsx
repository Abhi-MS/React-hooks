import { createContext } from "react";

export const AppContext=createContext();

function ContextProvider(props){
    const someText= "Context Text";
    return (<AppContext.Provider value={someText}>
        {props.children}
    </AppContext.Provider>)
}

export default ContextProvider