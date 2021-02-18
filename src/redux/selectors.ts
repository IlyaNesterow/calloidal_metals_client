import { RootState } from './'

export const getError = (state: RootState) => state.app.error
export const getMenuOpened = (state: RootState) => state.app.menuOpened
export const getLoading = (state: RootState) => state.app.loading
export const getTheme = (state: RootState) => state.theme.theme
export const getUsername = (state: RootState) => state.auth.username
export const getLoggedIn = (state: RootState) => state.auth.loggedIn
export const getSession = (state: RootState) => state.auth.session
export const getRememberMe = (state: RootState) => state.auth.rememberMe