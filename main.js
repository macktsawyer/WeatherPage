"use strict";

let input = document.getElementById("userLocationInput");
let cityName = 'New York';

async function getWeather() {
    let basic_api_URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(basic_api_URL);
    const data = await response.json();
    console.log(data);
    const temperature = Math.floor(data.main.temp * 9/5 + 32) + "°F";
    const location = data.name;
    const humidity = data.main.humidity + "%";
    const feelslike = Math.floor(data.main.feels_like * 9/5 + 32) + "°F"; //Make celsius conversion button
    const wind = Math.floor(data.wind.speed * 2.237) + "mph"; //Make meters per second conversion button
    document.getElementById('city').textContent = location;
    document.getElementById('temp').textContent = temperature;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('feelslike').textContent = feelslike;
    document.getElementById('wind').textContent = wind;
};

getWeather();

document.getElementById('userLocationButton').addEventListener('click', function getNewLocation() { 
    let newValue = document.getElementById('userLocationInput').value;
    cityName = newValue;
    console.log(cityName);
    getWeather();
});

input.addEventListener('keyup', function pushEnter(event) {   // Enables 'Enter' key to trigger input to be entered from input field 
    if(event.keyCode === 13){                                 // 13 Key is Enter, when key up, will trigger 'click' event on button
        event.preventDefault();
        document.getElementById('userLocationButton').click();
    }
});

