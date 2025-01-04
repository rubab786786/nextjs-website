'use client'

import { Provider } from "react-redux"
import { useStore } from "../redux/store"

export function StoreProvider({ children }) {
  const store = useStore({})

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )

} 