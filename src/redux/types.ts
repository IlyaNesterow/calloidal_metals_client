export interface AppState {
  loading: boolean
  menuOpened: boolean
  error?: string
  theme: boolean
}

export type Error = string | undefined

export const TOGGLE_THEME = 'TOGGLE_THEME'
export const SET_DEFAULT_THEME = 'SET_DEFAULT_THEME'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'
export const OPEN_CLOSE_MENU = 'OPEN_CLOSE_MENU'


export interface ToggleTheme {
  type: typeof TOGGLE_THEME
}

export interface SetDefaultTheme {
  type: typeof SET_DEFAULT_THEME
  theme: boolean
}

export interface SetError {
  type: typeof SET_ERROR
  error: Error
}

export interface SetLoading {
  type: typeof SET_LOADING
  loading: boolean
}

export interface OpenCloseMenu {
  type: typeof OPEN_CLOSE_MENU
  opened: boolean
}

export type AppActionType =  SetLoading | SetError | OpenCloseMenu | ToggleTheme | SetDefaultTheme