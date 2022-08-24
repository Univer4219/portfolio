function displayMessage() {
    alert("This is my portfolio!");
}

var whatsapp= document.querySelector('.whatsapp')
var twitter= document.querySelector('.twitter')



whatsapp.addEventListener('click', () => {
    console.log('whatsapp button clicked')
})

twitter.addEventListener('click', () => {
    console.log('twitter button clicked')
})

