export function getUsers() {
    return fetch('http://localhost:4000/users')
      .then(data => data.json())
}


  
export function setUser(user) {
   return fetch('http://localhost:4000/users', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(user)
   })
     .then(data => data.json())
}
