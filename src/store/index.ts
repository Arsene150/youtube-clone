import React, {
  FC,
  createContext,
  useReducer
} from 'react'

type props = {
  children: React.ReactNode
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

export const Store = createContext({
  globalState: initialState,
  setGlobalState: ({}) => null
})

export const StoreProvider: FC = ({children}: props) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)

  return (
    <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
  )
}