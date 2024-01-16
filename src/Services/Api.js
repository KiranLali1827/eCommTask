export function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
  }
  
  export function getOtherUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
  }
  
  export async function TestApi() {
    return fetch('https://randomuser.me/api/').then(response => response.json())
  }
