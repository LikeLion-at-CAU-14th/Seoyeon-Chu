import { createContext, useContext, useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  birth: '',
  gender: '',
};

const userInfoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfo, dispatch] = useReducer(userInfoReducer, initialState);

  return (
    <UserInfoContext.Provider value={{ userInfo, dispatch }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};