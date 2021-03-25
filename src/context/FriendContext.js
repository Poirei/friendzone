import { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_FRIENDS":
      return {
        ...state,
        friends: action.payload,
      };
    default:
      return state;
  }
};

const initialState = { friends: [] };

const FriendContext = createContext(initialState);

function FriendProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FriendContext.Provider value={{ state, dispatch }}>
      {children}
    </FriendContext.Provider>
  );
}

export { FriendContext, FriendProvider };
