let main=document.querySelector("main");
let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let four=document.querySelector("#four");

let crewName=document.getElementById("crewName");
let crewRange=document.getElementById("crewRange");
let crewDescription=document.getElementById("crewDescription");
let crewImage=document.querySelector(".crewImage");



fetch("./starter-code/data.json")
    .then(response => response.json())
    .then(data => {

      one.addEventListener("click", renderCrew);
      two.addEventListener("click", renderCrew);
      three.addEventListener("click", renderCrew);
      four.addEventListener("click", renderCrew); 

      function renderCrew(event) {


        let crew = event.target;
        one.classList.remove("navCurrentCrew");
        two.classList.remove("navCurrentCrew");
        three.classList.remove("navCurrentCrew");
        four.classList.remove("navCurrentCrew");
        crew.classList.add("navCurrentCrew");

        for (crew of data.crew) {


          if (crew.name===event.target.attributes.name.value) {

            crewName.innerText=crew.name;
            crewDescription.innerText=crew.bio;
            crewRange.innerText=crew.role;
            crewImage.setAttribute("src",crew.images.png);
          
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