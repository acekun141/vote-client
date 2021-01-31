import React from 'react';

export interface IUser {
  username: string
}

export interface IAuthContext {
  user: IUser
  status: 'pending' | 'success' | 'error'
}

export default React.createContext<IAuthContext>({
  user: null,
  status: null
});