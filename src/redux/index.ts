import { combineReducers, createStore } from 'redux'
import { appReducer } from './reducers/app'


const rootReducer = combineReducers({
  app: appReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)