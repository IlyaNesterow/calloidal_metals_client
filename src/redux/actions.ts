import { 
  TOGGLE_THEME, 
  SET_DEFAULT_THEME,
  SET_ERROR,
  SET_LOADING,
  OPEN_CLOSE_MENU,
  OpenCloseMenu,
  Error,
  SetDefaultTheme,
  ToggleTheme,
  SetError,
  SetLoading
} from './types'


export const setDefaultTheme = (theme: boolean): SetDefaultTheme => ({
  type: SET_DEFAULT_THEME,
  theme
})

export const toggleTheme = (): ToggleTheme => ({
  type: TOGGLE_THEME
})

export const setError = (error: Error): SetError => ({
  type: SET_ERROR,
  error
})

export const setLoading = (loading: boolean): SetLoading => ({
  type: SET_LOADING,
  loading
})

export const setMenuOpened = (opened: boolean): OpenCloseMenu => ({
  type: OPEN_CLOSE_MENU,
  opened
})