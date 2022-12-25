const createPostHandler = async(event) => {
    event.preventDefault(); 

      // Collect values from the login form
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  const userid = document.querySelector('#logout').dataset.userid; 

  if (title && content) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify( { title, content, user_id: userid } ),
    headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
    // If successful, redirect the browser to the dashboard page
        document.location.replace(`/dashboard/${userid}`); 
    } else {
    alert(response.statusText);
    } 
  } 
}
  
document
  .querySelector('.post-form')
  .addEventListener('submit', createPostHandler);