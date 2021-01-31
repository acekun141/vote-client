import React, {useEffect, useState} from 'react';
import AuthContext, { IAuthContext } from './AuthContext';
import Loading from 'components/atoms/Loading';

interface IProps {
  children: React.ReactNode
}

const AuthProvider: React.FunctionComponent<IProps> = (props) => {
  const [state, setState] = useState<IAuthContext>({
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
        <div style={{ height: '100vh' }}>
          <Loading />
        </div>
      ) : state.status === 'error' ? (
        'Error'
      ) : (
        props.children
      )}
    </AuthContext.Provider>
  )
}

export default AuthProvider;