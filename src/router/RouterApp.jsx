import { Navigate, Route, Routes } from "react-router-dom"
import { AuthPagesLogin } from '../auth/authIndex'
import { CalendarPages } from '../calendar/calendarPagesIndex'



export const RouterApp = () => {
    const authStatus = 'authenticated' // 'not-authenticated'

    return (
       
       <Routes>
            {
                (authStatus === 'not-authenticated')
                   ? <Route path="/auth/*" element={ <AuthPagesLogin /> } />
                   : <Route path="/*" element={ <CalendarPages /> } />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
       </Routes>
    )
}