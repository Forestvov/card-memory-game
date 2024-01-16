import React from 'react'
import { SetGridButton } from 'features/setGridButton'

import s from './initGame.module.scss'

export const InitGame = () => (
  <div className={s.container}>
    <h1 className={s.title}>Welcome !</h1>
    <p className={s.text}>Select grid game ;)</p>
    <div className={s.buttons}>
      <SetGridButton text="4x4" size={4} />
      <SetGridButton text="5x5" size={5} />
      <SetGridButton text="6x6" size={6} />
    </div>
  </div>
)
