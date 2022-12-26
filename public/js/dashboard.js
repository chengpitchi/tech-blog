const newButton = document.querySelector('#new-btn'); 
const itemContainer = document.querySelector('.container'); 

const newPost = (event) => {
  event.preventDefault(); 

  document.location.replace('/create'); 
}

const editPost = (event) => {
  event.preventDefault(); 
  const itemClicked = event.target; 

  if (itemClicked.id == "title-text") {
    document.location.replace(`/editpost/${itemClicked.dataset.id}`); 
  }
}

newButton.addEventListener('click', newPost); 
itemContainer.addEventListener('click', editPost); 