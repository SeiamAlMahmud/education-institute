import React, { createContext, useContext } from 'react'


const eduContextProvider = createContext()
export const useEduContext = ()=> {
    return useContext(eduContextProvider)
}
const EduContext = ({children}) => {
  const content = {}
  return (
    <eduContextProvider.Provider value={content}>
        {children}
    </eduContextProvider.Provider>
  )
}

export default EduContext