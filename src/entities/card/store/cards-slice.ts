import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCardIcons } from '../helper/get-card-icons'

interface IState {
  cards: string[]
}

const initialState: IState = {
  cards: [],
}

export const cardsSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initGame: (state, action: PayloadAction<number>) => {
      state.cards = getCardIcons(action.payload)
    },
  },
})

export const { initGame } = cardsSlice.actions
export default cardsSlice.reducer
