import React, { ReactNode } from 'react'
import s from './layout.module.scss'

interface ILayout {
  children: ReactNode
}

export const Layout = ({ children }: ILayout) => (
  <div className={s.layout}>
    <div className={s.container}>{children}</div>
  </div>
)
