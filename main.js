"use strict";

let input = document.getElementById("userLocationInput");
let cityName = 'New York';
let currentTempUnit = "°C";
let currentSpeedUnit = "mps";

function toggleButton() {
    let btn = document.getElementById('unitButton');
    let currentTemp = parseInt(document.getElementById('temp').textContent); // Obtains int form of measurements
    let currentWind = parseInt(document.getElementById('wind').textContent);
    let currentFeels = parseInt(document.getElementById('feelslike').textContent);

    if (btn.innerHTML === 'Metric') {
        btn.innerHTML = 'Imperial'; // Converts button label back to 'Imperial'
        currentSpeedUnit = "mph"; // Changes variable statuses, used in global scope for async function
        currentTempUnit = "°F";
        document.getElementById('unitSpeed').textContent = currentSpeedUnit; // Converts Units Back To Imperial
        document.getElementById('unitTemp').textContent = currentTempUnit;
        document.getElementById('unitTempFeel').textContent = currentTempUnit;
        document.getElementById('wind').textContent = Math.floor(currentWind * 2.237); // Converts wind, temps back to imperial
        document.getElementById('temp').textContent = Math.floor((currentTemp * (9/5)) + 32);
        document.getElementById('feelslike').textContent = Math.floor((currentFeels * (9/5)) + 32);
    } else {
        btn.innerHTML = 'Metric'; // Converts button label back to 'Metric'
        currentSpeedUnit = "mps"; // Changes variable statuses, used in global scope for async function
        currentTempUnit = "°C";
        document.getElementById('unitSpeed').textContent = currentSpeedUnit; // Converts Units Back to Metric
        document.getElementById('unitTemp').textContent = currentTempUnit;
        document.getElementById('unitTempFeel').textContent = currentTempUnit;
        document.getElementById('wind').textContent = Math.floor(currentWind / 2.237); // Converts wind, temps back to Metric
        document.getElementById('temp').textContent = Math.floor((currentTemp - 32) * (5/9));
        document.getElementById('feelslike').textContent = Math.floor((currentFeels - 32) * (5/9));
    }
}

async function getWeather() {
    let basic_api_URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(basic_api_URL);
    const data = await response.json();
    console.log(data);
    const location = data.name;
    let temperature = Math.floor(data.main.temp);
    let humidity = data.main.humidity + "%";
    let feelslike = Math.floor(data.main.feels_like); 
    let wind = Math.floor(data.wind.speed); 
    document.getElementById('city').textContent = location;
    document.getElementById('temp').textContent = temperature;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('feelslike').textContent = feelslike;
    document.getElementById('wind').textContent = wind;
    document.getElementById('unitSpeed').textContent = currentSpeedUnit;
    document.getElementById('unitTemp').textContent = currentTempUnit;
    document.getElementById('unitTempFeel').textContent = currentTempUnit;
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

// Known Issues
// Math.floor causes accuracy issues when toggling multiple times / Maybe use float and only display first two numbers?

// To Do
// Learn how to make more mobile friendly
// Make display look more like floating card. Solve mobile issue by making card the full screen?
// Create more weather features
// Display date and time(Unix) https://www.unixtimestamp.com/index.php
