const changeText = document.querySelector('#change-text'); 
const submitBtn = document.querySelector('#submit-btn'); 

const switchForm = (event) => {
  event.preventDefault(); 

  if (changeText.textContent === "Login Instead") {
    document.querySelector('#title-text').textContent = "Login"; 
    submitBtn.textContent = "Login"; 
    changeText.textContent = "Sign Up Instead"; 
  } else {
    document.querySelector('#title-text').textContent = "Sign Up"; 
    submitBtn.textContent = "Sign Up"; 
    changeText.textContent = "Login Instead"; 
  }
}

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const name = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
    if (submitBtn.textContent === "Login") {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify( { name, password } ),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        const result = response.json()
            .then((data) => {
              document.location.replace(`/dashboard/${data.id}`); 
            }); 
      } else {
        alert(response.statusText);
      } 
    } else {
      console.log(name, password); 
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        const result = response.json()
            .then((data) => {
              document.location.replace(`/dashboard/${data.id}`); 
            }); 
      } else {
        alert(response.statusText);
      }  
    }
  } 
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

changeText.addEventListener('click', switchForm); 