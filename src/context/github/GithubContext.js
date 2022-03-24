import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()


export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    user:  {},
    loading: false,
    repos: [],

  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  // get Search results
  


 
  return <GithubContext.Provider value={{
    ...state,
    dispatch,
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext