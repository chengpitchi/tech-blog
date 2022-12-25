const updatePost = async(event) => {
    event.preventDefault(); 

    // Collect values from the post form
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const id = document.querySelector('#post-content').dataset.id; 
    const user_id = document.querySelector('#logout').dataset.userid; 

    if (title && content) {
        // Send a PUT request to the API endpoint
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify( { title, content } ),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        // If successful, redirect the browser to the dashboard page
            document.location.replace(`/dashboard/${user_id}`); 
        } else {
        alert(response.statusText);
        } 
    } 
}

const deletePost = async(event) => {
    event.preventDefault(); 

    // Collect values from the post form
    const id = document.querySelector('#post-content').dataset.id; 
    const user_id = document.querySelector('#logout').dataset.userid; 

    if (title && content) {
        // Send a DELETE request to the API endpoint
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
        // If successful, redirect the browser to the dashboard page
            document.location.replace(`/dashboard/${user_id}`); 
        } else {
        alert(response.statusText);
        } 
    } 
}

document
  .querySelector('.post-form')
  .addEventListener('submit', updatePost);

document.querySelector('#delete-btn').addEventListener('click', deletePost); 