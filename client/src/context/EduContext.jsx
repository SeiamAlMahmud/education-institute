import React, { createContext, useContext } from 'react'


const eduContextProvider = createContext()
export const useEduContext = ()=> {
    return useContext(eduContextProvider)
}
const EduContext = ({children}) => {
  return (
    <eduContextProvider.Provider>
        {children}
    </eduContextProvider.Provider>
  )
}

export default EduContext