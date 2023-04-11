$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        alert('Content is protected\nYou cannot view the Dev Tools.');
		return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        alert('Content is protected\nYou cannot view the Dev Tools.');
		return false;
    }
});

document.addEventListener("contextmenu", function(e) {
  if (!e.target.matches("img")) {
    e.preventDefault();
  }
});

document.onkeydown = function(e) {
        if (e.ctrlKey &&
            (e.keyCode === 85 )) {
            return false;
        }
};
