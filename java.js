const imagecont = document.querySelector(".image-cont");
const imageitself = document.querySelector(".image-itself");


const fullscreenBtn = document.getElementById("fullscreen-btn");

fullscreenBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    fullscreenBtn.textContent="open surprise";
    imageitself.src = "https://i.pinimg.com/564x/04/4d/2e/044d2e4dc979c13ecc690af4834aed30.jpg";
  } else {
    imagecont.requestFullscreen();
    fullscreenBtn.textContent="close surprise";
    imageitself.src = "https://i.pinimg.com/564x/51/8c/24/518c240e0338a3f1eee6935f8f535d74.jpg";
  }
});
