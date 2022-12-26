let itemContainer = document.getElementById('item-container'); 

const openPostItem = (event) => {
    let itemClicked = event.target; 

    if (itemClicked.id === "title-text") {
        window.location.href = `/api/posts/${itemClicked.dataset.id}`; 
    }
}

itemContainer.addEventListener("click", openPostItem); 
