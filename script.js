function redirectToMusic() {
    window.location.href = "https://www.youtube.com/watch?v=04854XqcfCY";
  }
  
  function moveNoBlock() {
    var noBlock = document.getElementById("no");
    var maxX = window.innerWidth - noBlock.offsetWidth;
    var maxY = window.innerHeight - noBlock.offsetHeight;
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);
    
    noBlock.style.left = newX + "px";
    noBlock.style.top = newY + "px";
  }
  