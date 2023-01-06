let main=document.querySelector("main");
let moon=document.getElementById("Moon");
let mars=document.getElementById("Mars");
let europa=document.getElementById("Europa");
let titan=document.getElementById("Titan");

let planetName=document.getElementById("planetName");
let planetDescription=document.getElementById("planetDescription");
let planetDistance=document.getElementById("planetDistance");
let planetTravel=document.getElementById("planetTravel");
let planetImage=document.querySelector(".planetImage");



fetch("./starter-code/data.json")
    .then(response => response.json())
    .then(data => {

      moon.addEventListener("click", renderDestination);
      mars.addEventListener("click", renderDestination);
      europa.addEventListener("click", renderDestination);
      titan.addEventListener("click", renderDestination); 

      function renderDestination(event) {

        let planet = event.target;
        moon.classList.remove("current");
        mars.classList.remove("current");
        europa.classList.remove("current");
        titan.classList.remove("current");
        planet.classList.add("current");

        for (destination of data.destinations) {

          if (destination.name===event.target.id) {

            planetName.innerText=destination.name
            planetDescription.innerText=destination.description
            planetDistance.innerText=destination.distance
            planetTravel.innerText=destination.travel
            planetImage.setAttribute("src",destination.images.png)
          
          }


      }
    }
    })

let close = document.querySelector(".close");
let menuIcon = document.getElementById("menuIcon");
let menu = document.getElementById("menu")

close.addEventListener("click",renderMenu);
menuIcon.addEventListener("click",renderMenu);

function renderMenu() {
  menu.classList.toggle("activeMenu");
}