export const LOG_IN = 'LOG_IN';

export function login(callback){
    //Simulate some network delay
    let login = delay(Math.floor(Math.random() * 2000) + 1000)
        .then(() => callback() )
        .then(() => {
            return { logged: true }
        });
    return {
        type: LOG_IN,
        payload: login
    }
}

function delay(t, v) {
    return new Promise(function(resolve) { 
        setTimeout(resolve.bind(null, v), t)
    });
 }