// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json){
      const div= document.getElementById("missionTarget");
      div.innerHTML= `
      <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[0].image}">`
});
});
let form = this.document.getElementById("form");
let pilotNameInput = document.querySelector("input[name=pilotName]");
let copilotNameInput = document.querySelector("input[name=copilotName]");
let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
let cargoMassInput = document.querySelector("input[name=cargoMass]");
let pilotStatusUpdate= document.getElementById("pilotStatus");
let copilotStatusUpdate = document.getElementById("copilotStatus");
let fuelStatusUpdate =  document.getElementById("fuelStatus");
let cargoStatusUpdate = document.getElementById("cargoStatus");
let faultyItems = document.getElementById("faultyItems");
let formSubmit = document.getElementById("formSubmit");
let launchStatusUpdate = document.getElementById("launchStatus");
myForm.addEventListener("submit", function(){

if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
   window.alert("All fields required.")
   event.preventDefault();
}
else if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false){
   alert("Invalid input.")
   event.preventDefault();
}
else if (isNaN(fuelLevelInput.value)){
   alert("Invalid input. Fuel level value must be a number")
   event.preventDefault();
}
else if (isNaN(cargoMassInput.value)){
   alert("Invalid input. Cargo mass value must be a number")
   event.preventDefault();
}
   faultyItems.style.visibility = "visible";
   pilotStatusUpdate.innerHTML =`Pilot ${pilotNameInput.value} is ready for launch`;
   copilotStatusUpdate.innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch`;
   event.preventDefault();

if (fuelLevelInput.value < 10000){
   faultyItems.style.visibility = "visible";
   fuelStatusUpdate.innerHTML = `Not enough fuel for journey`;
   launchStatusUpdate.innerHTML = `Shuttle not ready for launch`;
   launchStatusUpdate.style.color = "red";
   event.preventDefault();
}
if (cargoMassInput.value > 10000){
   faultyItems.style.visibility = "visible";
   cargoStatusUpdate.innerHTML = `Too much mass for the shuttle to take off`;
   launchStatusUpdate.innerHTML = `Shuttle not ready for launch`;
   launchStatusUpdate.style.color = "red";
   event.preventDefault();
}
if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000){
   faultyItems.style.visibility = "visible";
   launchStatusUpdate.innerHTML = `Shuttle is ready for takeoff!`;
   launchStatusUpdate.style.color = "green";
   fuelStatusUpdate.innerHTML = `Enough fuel for journey.`;
   cargoStatusUpdate.innerHTML = `Low enough cargo mass for journey.`
   event.preventDefault();
};
});
});
