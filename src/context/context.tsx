import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { reducer, initialStateValue } from './reducer'

interface IAppProviderProps {
    children: ReactNode;
}

const AppStateContext = createContext<any>(null)
const AppDispachContext = createContext<any>(null)

export const useAppState = () => {
    const context = useContext(AppStateContext)
    if (context === undefined) {
        console.log('AppStateContext undefined')
    }
    return context
}
export const useAppDispatch = () => {
    const context = useContext(AppDispachContext)
    if (context === undefined) {
        console.log('AppDispachContext undefined')
    }
    return context
}

export const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStateValue);
    return (
        <AppStateContext.Provider value={{
            state,
        }}>
            <AppDispachContext.Provider value={dispatch}>{children}</AppDispachContext.Provider>
        </AppStateContext.Provider>
    )
}



