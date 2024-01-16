import React from 'react'
import { useAppDispatch } from 'app'
import { GameSizeValue, setGameSize } from 'entities/card'

import s from './setGridButton.module.scss'

interface ISetGridButton {
  text: string
  size: GameSizeValue
}

export const SetGridButton = (props: ISetGridButton) => {
  const { text, size } = props

  const dispatch = useAppDispatch()

  const selectGridSize = (value: GameSizeValue) => {
    dispatch(setGameSize(value))
  }

  return (
    <button className={s.button} onClick={() => selectGridSize(size)} type="button">
      {text}
    </button>
  )
}
