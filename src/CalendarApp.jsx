import { BrowserRouter } from "react-router-dom"
import { RouterApp } from "./router/routerAppIndex"
import { Provider } from "react-redux"
import { store } from "./store/storeIndex"




export const CalendarApp = () => {
   return (

        <Provider store={ store }>
            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
        </Provider>
    )
}