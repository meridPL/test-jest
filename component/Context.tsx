import React from 'react'
import { StoreMB } from '../mobx/store'

const ContextApp = React.createContext(new StoreMB())

export const ContextProvider = ContextApp.Provider
export const ContextConsumer = ContextApp.Consumer

export default ContextApp