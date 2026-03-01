function showPopup(event, message) {
    const popup = document.getElementById('popup');
    popup.innerHTML = message;
    popup.style.display = 'block';
    popup.style.left = event.pageX + 'px';
    popup.style.top = event.pageY + 'px';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}