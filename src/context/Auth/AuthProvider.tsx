import React, {useEffect, useState} from 'react';
import AuthContext, {IAuthContext, IUser} from './AuthContext';

interface IProps {
  children: React.ReactNode
}

interface IState {
  status: 'pending' | 'success' | 'error',
  user: IUser
}

const AuthProvider: React.FunctionComponent<IProps> = (props) => {
  const [state, setState] = useState<IState>({
    status: 'pending',
    user: null
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setState(prevState => ({
        status: 'success',
        user: {username: 'Hung Le Viet'}
      }))
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {state.status === 'pending' ? (
        'Loading...'
      ) : state.status === 'error' ? (
        'Error'
      ) : (
        props.children
      )}
    </AuthContext.Provider>
  )
}

export default AuthProvider;