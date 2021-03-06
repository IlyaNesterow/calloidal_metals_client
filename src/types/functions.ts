import React from 'react'
import { Content, Page } from './index'


export type InputOnChange = React.ChangeEventHandler<HTMLInputElement>

export type ButtonOnClick = React.MouseEventHandler<HTMLButtonElement>

export type DivOnClick = React.MouseEventHandler<HTMLDivElement>

export type SpanMouseEvent = React.MouseEventHandler<HTMLSpanElement>

export type HandleControlBarClick = (num: number) => void

export type GetPageFunc = (obj: Content, page: string) => Page | undefined