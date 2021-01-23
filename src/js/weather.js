const weatherSpan = document.querySelector(".js-weather");
const API_KEY = "1f02db58c514e115519e97d4fa3f5ee8";
const COORDS = "coords";

function getWheather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weatherSpan.innerText = `temperature : ${temperature} / place : ${place}`;
    });
}

function saveCoords(coordsObj){
    console.log("save?");
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    }
    saveCoords(coordsObj);
    getWheather(latitude,longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWheather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();