import React from 'react'
import { CardsList } from 'widgets/cardsList'
import { InitGame } from 'widgets/initGame'
import { useAppSelector } from 'app'

export const Game = () => {
  const { cards, gameSize } = useAppSelector((state) => state.game)

  if (cards.length === 0) {
    return <InitGame />
  }

  if (gameSize !== null) {
    return <CardsList cards={cards} gameSize={gameSize} />
  }

  return null
}
