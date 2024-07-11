// Add your code here
function submitData(userName, userEmail){
    const url = "http://localhost:3000/users"
    const formData ={
        name:userName,
        email: userEmail
    }

const configObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
},
body : JSON.stringify(formData)
}

return fetch(url, configObject)
    .then(response => response.json())
    .then(data => {
      const id = data.id;
      document.body.innerHTML += `<p>New user ID: ${id}</p>`;
    })
    .catch(error => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}