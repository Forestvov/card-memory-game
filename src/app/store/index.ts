import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { cardsSlice } from 'entities/card'

export const store = configureStore({
  reducer: combineSlices(cardsSlice),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
