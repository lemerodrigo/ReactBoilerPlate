
// A simple class to handle user stuff.
// Here is where we are going to make a post to our api
class UserService {

  // Signup.
  signUp(email, password) {
    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    return fetch('/api/users/signup', data)
      .then(response => response.json())
      .catch((err) => {
        console.log(err);
      }); 
  }

  // Login method.
  login(email, password) {
    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    return fetch('/api/users/login', data)
      .then(response => response.json())
      .catch((err) => {
        console.log(err);
      }); 
  }
}

module.exports = UserService;
