import React from 'react';
import AuthContext from "./AuthContext";

export default () => {
  const state = React.useContext(AuthContext);
  const isPending = state.status === 'pending';
  const isSuccess = state.status === 'success';
  const isError = state.status === 'error';
  const isAuthenticated = state.user && isSuccess;
  return {
    ...state,
    isPending,
    isSuccess,
    isError,
    isAuthenticated
  }
}