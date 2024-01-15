import React from 'react'
import { Card } from 'entities/card'
import { generateCardsHelper } from 'entities/card/helper/generate-cards-helper'

import s from './list.module.scss'

const count = 4
const cardWidth = 125
const gap = 20

export const List = () => {
  const items = generateCardsHelper(count)
  const widthList = cardWidth * count + gap * count

  return (
    <div className={s.list} style={{ width: widthList }}>
      {items.map((card, idx) => (
        <Card icon={card} key={idx} />
      ))}
    </div>
  )
}
