import { 
  LOGIN, 
  LOGOUT, 
  TOGGLE_THEME, 
  SET_DEFAULT_THEME,
  SET_ERROR,
  SET_LOADING,
  SET_REMEMBER_ME,
  Error,
  AuthData,
  LogIn,
  LogOut, 
  SetDefaultTheme,
  ToggleTheme,
  SetError,
  SetLoading,
  SetRememberMe
} from './types'


export const Login = (data: AuthData): LogIn => ({
  type: LOGIN,
  payload: data
})

export const setDefaultTheme = (theme: boolean): SetDefaultTheme => ({
  type: SET_DEFAULT_THEME,
  theme
})

export const logout = (): LogOut => ({
  type: LOGOUT
})

export const toggleThem = (): ToggleTheme => ({
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

export const setRememberMe = (remember: boolean): SetRememberMe => ({
  type: SET_REMEMBER_ME,
  remember
})