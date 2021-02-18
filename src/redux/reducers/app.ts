import { 
  AppActionType, 
  AppState, 
  SET_ERROR, 
  SET_LOADING
} from '../types'


const initialState: AppState = {
  error: undefined,
  loading: false
}

export const appReducer = (state = initialState, action: AppActionType): AppState => {
  switch(action.type){
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}