import React, {
  FC,
  createContext,
  useReducer
} from 'react'

interface PopularState {
  kind: string
  etag: string
  id: string
}

interface InitialState {
  popular: PopularState[]
}

const initialState = {
  popular: []
}

const reducer = (state: any, action: any) => {
  switch(action.type) {
    case 'SET_POPULAR':
      return { popular: action.payload.popular }
    default:
      return state
  }
}

export const Store = createContext<{
  globalState: InitialState
  setGlobalState: React.Dispatch<any>
}>({
  globalState: initialState,
  setGlobalState: () => null
})

export const StoreProvider: FC = ({children}) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)

  return (
    <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
  )
}