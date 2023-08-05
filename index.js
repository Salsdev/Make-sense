const overlay = document.querySelectorAll("#overlay-slider .overlay-child")
const dropZone = document.querySelector(".ImagesDropZone");

dropZone.style.display = "none";

document.getElementById("get-started-btn").addEventListener('click', () => {
    Array.from(overlay).forEach(x => {
        x.style.width = "90%";
        
    })

})
document.getElementById("go-back-btn").addEventListener('click' , () => {
    Array.from(overlay).forEach(y => {
        y.style.width = "30%"
    })
})

document.getElementById("buttons").addEventListener("click", function(event) {
    if (event.target.id === "get-started-btn") {
      document.getElementById("go-back-btn").style.display = "block";
      document.getElementById("get-started-btn").style.display = "none";
      document.getElementById("drp").style.display = "flex";
      dropZone.style.display = "inline";
    } else if (event.target.id === "go-back-btn") {
      document.getElementById("get-started-btn").style.display = "block";
      document.getElementById("go-back-btn").style.display = "none";
      document.getElementById("drp").style.display = "none";
      dropZone.style.display = "none";
    }
  });