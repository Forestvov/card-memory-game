import React from 'react'
import s from './card.module.scss'

interface ICard {
  icon: string
}

export const Card = (props: ICard) => {
  const { icon } = props

  return (
    <button className={s.card} type="button">
      <img src={icon} alt="" />
    </button>
  )
}
