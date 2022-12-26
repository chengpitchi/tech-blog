const createComment = async(event) => {
    event.preventDefault(); 

    // Collect values from the post form
    const comment_text = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('#title-text').dataset.id; 
    const user_id = document.querySelector('#logout').dataset.userid; 

    if (comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify( { comment_text, post_id, user_id } ),
      headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
      // If successful, redirect the browser to the dashboard page
          document.location.replace(`/api/posts/${post_id}`); 
      } else {
      alert(response.statusText);
      } 
    } 
}
  
document
  .querySelector('.comment-form')
  .addEventListener('submit', createComment);