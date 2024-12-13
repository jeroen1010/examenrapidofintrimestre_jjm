import { configureStore } from '@reduxjs/toolkit'
import { riegoApi } from '../http/http'

export const store = configureStore({
  reducer: {
    [riegoApi.reducerPath]: riegoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(riegoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;