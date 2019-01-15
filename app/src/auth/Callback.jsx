import React, { Component } from 'react';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { rxConnect } from 'rx-connect';
import { handleAuth$ } from './authService';

@rxConnect(props$ =>
  props$.pipe(
    handleAuth$,
    map(({ authResult }) => ({ authResult })),
    catchError(error => of({ error }))
  )
)
class Callback extends Component {
  render() {
    return <div>Auth</div>;
  }
}

export default Callback;
