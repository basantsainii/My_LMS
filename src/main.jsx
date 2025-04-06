import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './All_css/index.css'
import { CurrentContextProvider } from './Context_API/CurrentContext.jsx'
import { SearchContextProvider } from './Context_API/SearchContext.jsx'
import { HumBurgerContextProvider } from './Context_API/ResponsiveContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CurrentContextProvider >
        <SearchContextProvider>
            <HumBurgerContextProvider>
            <App />
            </HumBurgerContextProvider>
        </SearchContextProvider>
    </CurrentContextProvider>
)
