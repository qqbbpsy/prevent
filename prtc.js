$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        alert(&#39;Content is protected\nYou cannot view the Dev Tools.&#39;);
		return false;
    } else if (event.ctrlKey &amp;&amp; event.shiftKey &amp;&amp; event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        alert(&#39;Content is protected\nYou cannot view the Dev Tools.&#39;);
		return false;
    }
});

document.addEventListener(&quot;contextmenu&quot;, function(e) {
  if (!e.target.matches(&quot;img&quot;)) {
    e.preventDefault();
  }
});

document.onkeydown = function(e) {
        if (e.ctrlKey &amp;&amp;
            (e.keyCode === 85 )) {
            return false;
        }
};