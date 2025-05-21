window.addEventListener('load', () => {
  const splashScreen = document.getElementById('intro');
  setTimeout(() => {
      
      splashText.style.display = 'none';
     
      const newSplashText = document.getElementById('newSplashText');
      newSplashText.style.display = 'block';
  }, 5000); 

  setTimeout(() => {
      splashScreen.style.display = 'none'; 
      window.location.href = 'home.html';
  }, 30000); 
});

var exitButton = document.getElementById('exitSplashButton');
var splashText = document.getElementById('splashText');

function exitSplash() {
  var splashScreen = document.getElementById('intro');
  splashScreen.style.display = 'none';
  
  window.location.href = 'homepage.html';
}


exitButton.addEventListener('click', exitSplash);
