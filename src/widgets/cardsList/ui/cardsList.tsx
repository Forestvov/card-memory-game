import React from 'react'
import { Card } from 'entities/card'

import s from './cardsList.module.scss'

const cardWidth = 125
const gap = 20

interface ICardsList {
  cards: string[]
  gameSize: number
}

export const CardsList = ({ cards, gameSize }: ICardsList) => {
  const widthList = cardWidth * gameSize + gap * gameSize

  return (
    <div className={s.list} style={{ width: widthList }}>
      {cards.map((card, idx) => (
        <Card icon={card} key={idx} />
      ))}
    </div>
  )
}
