function highlight() {
    let boldItems = document.querySelectorAll('strong');
    for(let i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = 'green';
    }
}

function return_normal() {
    let boldItems = document.querySelectorAll('strong');
    for(let i = 0; i < boldItems.length; i++) {
        boldItems[i].style.color = 'black';
    }
}
