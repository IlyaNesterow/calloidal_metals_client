import { createContext } from 'react' 

import { Content } from '../types'

export const CurrentPage = createContext<string>('')

export const PageContent = createContext<Content | null>(null)
