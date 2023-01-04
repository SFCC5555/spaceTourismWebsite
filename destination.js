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



/*<section class="secondContent">

<div class="title size16-20-28px font2 colorWhite marginB32-60-97px"><span class="spanNumber">01 </span>PICK YOUR DESTINATION</div>

<section class="thirdContent">

    <image class="planetImage" src="./starter-code/assets/destination/image-moon.png"></image>

    <section class="mainContent desktopW445px">

        <section class="navPlanet">

            <div class="current">MOON</div>
            <div>MARS</div>
            <div>EUROPA</div>
            <div>TITAN</div>
    
        </section>
        <div class="size56-80-100px font1 colorWhite marginB16-24-24px">MOON</div>
        <p class="borderB1px-solid paddingB32-49-54px">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

        <section class="dataContainer">

          <div>
            <div class="size14px font2 colorLight marginB12px">AVG. DISTANCE</div>
            <div class="size28px font1 colorWhite">384,400 KM</div>
          </div>

          <div>
            <div class="size14px font2 colorLight marginB12px">EST. TRAVEL TIME</div>
            <div class="size28px font1 colorWhite">3 DAYS</div>
          </div>

        </section>
    </section>    
</section>    
</section>*/