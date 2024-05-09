
import { configureStore } from '@reduxjs/toolkit'
import { storeCalendarSlice, storeUiSlice } from './storeIndex'



export const store = configureStore({
    reducer: {
        calendar: storeCalendarSlice.reducer,
        ui: storeUiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})