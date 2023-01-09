let main=document.querySelector("main");
let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");

let technologyName=document.getElementById("technologyName");
let technolyDescription=document.getElementById("technologyDescription");
let technologyImage=document.querySelector(".technologyImage");
let technologyImageD=document.querySelector(".technologyImageD");



fetch("./starter-code/data.json")
    .then(response => response.json())
    .then(data => {

      one.addEventListener("click", renderTech);
      two.addEventListener("click", renderTech);
      three.addEventListener("click", renderTech);

      function renderTech(event) {


        let tech = event.target;
        one.classList.remove("navCurrentTechnology");
        two.classList.remove("navCurrentTechnology");
        three.classList.remove("navCurrentTechnology");
        tech.classList.add("navCurrentTechnology");

        for (tech of data.technology) {


          if (tech.name===event.target.attributes.name.value) {

            technologyName.innerText=tech.name;
            technologyDescription.innerText=tech.description;
            technologyImage.setAttribute("src",tech.images.landscape);
            technologyImageD.setAttribute("srcset",tech.images.portrait);

          
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