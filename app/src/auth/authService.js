import auth0 from 'auth0-js';
import { from } from 'rxjs';

const auth = new auth0.WebAuth({
  domain: 'drpoets.auth0.com',
  clientID: 'koQgFV0qPj0rigzzyhO7JDaKFIPPfxlB',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'token id_token',
  scope: 'openid'
});

function setSession(authResult) {
  const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  const { accessToken, idToken } = authResult;

  localStorage.setItem(
    'auth',
    JSON.stringify({
      accessToken,
      idToken,
      expiresAt
    })
  );

  // navigate to the home route
  // history.replace('/home');
}

export function handleAuth$() {
  return from(
    new Promise((fulfill, reject) => {
      auth.parseHash((error, authResult) => {
        if (error) {
          reject(new Error(error));
        }
        if (authResult && authResult.accessToken && authResult.idToken) {
          setSession(authResult);
          fulfill({ authResult });
        }
      });
    })
  );
}

export function login() {
  auth.authorize();
}

export function logout() {
  return true;
}
