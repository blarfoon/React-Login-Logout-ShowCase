import { users } from '../users';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';



export function login(values, callback) {
  //Simulate some network delay
  let login = delay(Math.floor(Math.random() * 2000) + 1000)
    .then(() => callback())
    .then(() => {
      if (users.find((user) => { return (user.user === values.user && user.pass === values.pass) })) {
        return { logged: true }
      }
      return { logged: false }
    });

  return {
    type: LOG_IN,
    payload: login
  }
}

export function logout(callback) {
  //Simulate some network delay
  let logout = delay(Math.floor(Math.random() * 2000) + 1000)
    .then(() => callback())
    .then(() => {
      return { logged: false }
    });

  return {
    type: LOG_OUT,
    payload: logout
  }
}

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t)
  });
}