import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameSize, GameSizeValue } from '../types'
import { generateCardsHelper } from '../helper/generate-cards-helper'

interface IState {
  cards: string[]
  gameSize: GameSize
}

const initialState: IState = {
  cards: [],
  gameSize: null,
}

export const cardsSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameSize: (state, action: PayloadAction<Exclude<GameSizeValue, null>>) => {
      state.cards = generateCardsHelper(action.payload)
      state.gameSize = action.payload
    },
  },
})

export const { setGameSize } = cardsSlice.actions
export default cardsSlice.reducer
