import React from 'react';
import { login } from './authService';

export default function Login() {
  login();
  return <div>Login</div>;
}
