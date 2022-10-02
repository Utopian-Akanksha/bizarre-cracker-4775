import React, { useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false,
    token: null,
    loading: false,
    error: false,
    data: [],
    isDataLoading: false
  });
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
