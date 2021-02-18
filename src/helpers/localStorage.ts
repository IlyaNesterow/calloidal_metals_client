
export const setDefaults = (): void => {
  window.localStorage.setItem('theme', 'false')
  window.localStorage.setItem('rememberMe', 'false')
  window.localStorage.removeItem('session')
  window.localStorage.removeItem('username')
}

export const logout = (): void => {
  window.localStorage.removeItem('session')
  window.localStorage.removeItem('username')
}

export const login = (username: string, session: string): void => {
  window.localStorage.setItem('username', username)
  window.localStorage.setItem('session', session)
}

export const toggleRememberMe = (): void => 
  window.localStorage.setItem(
    'rememberMe',
    window.localStorage.getItem('rememberMe') === 'true'
      ? 'false'
      : 'true'
  )