import React, { useState } from 'react'
import { TokenContext } from './TokenContext'

export const TokenProvider = ({ children }) => {

  const [ tokenState, setToken ] = useState(window.localStorage.getItem('access_token'));

  return (
    <TokenContext.Provider value={{ tokenState, setToken }}>
        { children }
    </TokenContext.Provider>
  )
}