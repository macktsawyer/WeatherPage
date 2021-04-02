"use strict";

// Known Issues
// New location while on 'imperial' causes info reporting error
// Background limited with console up and scrolling down

// To Do
// Prettify called weather timestamp
// Add weather response features (sunshine and light background for clear weather, etc)
// Open Street Map for Weather Map?
// Add Forecasted Weather
// Convert meters to kilometers

let input = document.getElementById("userLocationInput");
let cityName = 'San Diego';
let currentTempUnit = "°C";
let currentSpeedUnit = "mps";
let currentDistanceUnit = "+ meters";
let timeStamp = new Date();
let localTime = timeStamp.toLocaleString();
let currentCondition = "cloudy";
let specialWeather = "Clear";

function toggleButton() {
    let btn = document.getElementById('unitButton');
    let currentTemp = parseInt(document.getElementById('temp').textContent); // Obtains int form of measurements
    let currentWind = parseInt(document.getElementById('wind').textContent);
    let currentFeels = parseInt(document.getElementById('feelslike').textContent);
    let visMeasure = parseInt(document.getElementById('visibil').textContent);
    let locationMinTemp = parseInt(document.getElementById('minTemp').textContent);
    let locationMaxTemp = parseInt(document.getElementById('maxTemp').textContent);
    let newYorkTemp = parseInt(document.getElementById('newYorkTemperature').textContent);
    let losAngelesTemp = parseInt(document.getElementById('losAngelesTemperature').textContent);
    let bostonTemp = parseInt(document.getElementById('bostonTemperature').textContent);
    let miamiTemp = parseInt(document.getElementById('miamiTemperature').textContent);
    let dallasTemp = parseInt(document.getElementById('dallasTemperature').textContent);

    if (btn.innerHTML === 'Metric') {
        btn.innerHTML = 'Imperial'; // Converts button label back to 'Imperial'
        currentSpeedUnit = "mph"; // Changes variable statuses, used in global scope for async function
        currentTempUnit = "°F";
        currentDistanceUnit = "+ feet";
        document.getElementById('unitSpeed').textContent = currentSpeedUnit; // Converts Units Back To Imperial
        document.getElementById('unitTemp').textContent = currentTempUnit;
        document.getElementById('minTempUnit').textContent = currentTempUnit;
        document.getElementById('maxTempUnit').textContent = currentTempUnit;
        document.getElementById('unitTempFeel').textContent = currentTempUnit;
        document.getElementById('visibilityUnit').textContent = currentDistanceUnit;
        document.getElementById('wind').textContent = Math.round(currentWind * 2.237); // Converts wind, temps back to imperial
        document.getElementById('temp').textContent = Math.round((currentTemp * (9/5)) + 32);
        document.getElementById('minTemp').textContent = Math.round((locationMinTemp * (9/5)) + 32);
        document.getElementById('maxTemp').textContent = Math.round((locationMaxTemp * (9/5)) +32);
        document.getElementById('feelslike').textContent = Math.round((currentFeels * (9/5)) + 32);
        document.getElementById('visibil').textContent = Math.round(visMeasure * 3.281);

        document.getElementById('newYorkTemperature').textContent = Math.round((newYorkTemp * (9/5)) + 32);
        document.getElementById('topBarUnitNY').textContent = currentTempUnit;
        document.getElementById('losAngelesTemperature').textContent = Math.round((losAngelesTemp * (9/5)) + 32);
        document.getElementById('topBarUnitLA').textContent = currentTempUnit;
        document.getElementById('bostonTemperature').textContent = Math.round((bostonTemp * (9/5)) + 32);
        document.getElementById('topBarUnitBos').textContent = currentTempUnit;
        document.getElementById('miamiTemperature').textContent = Math.round((miamiTemp * (9/5)) + 32);
        document.getElementById('topBarUnitMia').textContent = currentTempUnit;
        document.getElementById('dallasTemperature').textContent = Math.round((dallasTemp * (9/5)) + 32);
        document.getElementById('topBarUnitDal').textContent = currentTempUnit;
    } else {
        btn.innerHTML = 'Metric'; // Converts button label back to 'Metric'
        currentSpeedUnit = "mps"; // Changes variable statuses, used in global scope for async function
        currentTempUnit = "°C";
        currentDistanceUnit = "+ meters";
        document.getElementById('unitSpeed').textContent = currentSpeedUnit; // Converts Units Back to Metric
        document.getElementById('unitTemp').textContent = currentTempUnit;
        document.getElementById('minTempUnit').textContent = currentTempUnit;
        document.getElementById('maxTempUnit').textContent = currentTempUnit;
        document.getElementById('unitTempFeel').textContent = currentTempUnit;
        document.getElementById('visibilityUnit').textContent = currentDistanceUnit;
        document.getElementById('wind').textContent = Math.round(currentWind / 2.237); // Converts wind, temps back to Metric
        document.getElementById('temp').textContent = Math.round((currentTemp - 32) * (5/9));
        document.getElementById('minTemp').textContent = Math.round((locationMinTemp - 32) * (5/9));
        document.getElementById('maxTemp').textContent = Math.round((locationMaxTemp - 32) * (5/9));
        document.getElementById('feelslike').textContent = Math.round((currentFeels - 32) * (5/9));
        document.getElementById('visibil').textContent = Math.round(visMeasure / 3.281);

        document.getElementById('newYorkTemperature').textContent = Math.round((newYorkTemp - 32) * (5/9));
        document.getElementById('topBarUnitNY').textContent = currentTempUnit;
        document.getElementById('losAngelesTemperature').textContent = Math.round((losAngelesTemp - 32) * (5/9));
        document.getElementById('topBarUnitLA').textContent = currentTempUnit;
        document.getElementById('bostonTemperature').textContent = Math.round((bostonTemp - 32) * (5/9));
        document.getElementById('topBarUnitBos').textContent = currentTempUnit;
        document.getElementById('miamiTemperature').textContent = Math.round((miamiTemp - 32) * (5/9));
        document.getElementById('topBarUnitMia').textContent = currentTempUnit;
        document.getElementById('dallasTemperature').textContent = Math.round((dallasTemp - 32) * (5/9));
        document.getElementById('topBarUnitDal').textContent = currentTempUnit;
    }
}

async function getWeather() {
    let basic_api_URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5'; // Changes API call for the cityName entered
    const response = await fetch(basic_api_URL);
    const data = await response.json();
    console.log(data);
    const location = data.name;
    let temperature = Math.round(data.main.temp); // Variables must be local for async call
    let humidity = data.main.humidity + "%";
    let feelslike = Math.round(data.main.feels_like); 
    let wind = Math.round(data.wind.speed);
    let visMeasure = data.visibility;
    let minimumTemp = Math.round(data.main.temp_min);
    let maximumTemp = Math.round(data.main.temp_max);
    let cloudAmount = data.clouds.all;
    let timeZoneOffset = data.timezone; // TZ offset of area where weather was called by user
    let weatherCallTime = new Date((new Date().getTime())+(timeZoneOffset*1000));
    let weatherCallRevised = weatherCallTime.toISOString(); // Time for area where weather was called by user
    let unixTime = data.dt; // Unix time for comparing to sunrise and sunset
    let sunRise = data.sys.sunrise;
    let sunSet = data.sys.sunset;
    specialWeather = data.weather[0].main;

    currentCondition = (cloudAmount > 50) ? "cloudy" : "sunny";

    if (specialWeather === "Rain") {  // Weather emblem changes specific to special weather conditions
        currentCondition = "Rain";
    } else if (specialWeather === "Snow") {
        currentCondition = "Snow"
    } else if (specialWeather === "Thunderstorm") {
        currentCondition = "Thunderstorm"
    } else {
        currentCondition = currentCondition;
    }

    if (unixTime > sunRise && unixTime < sunSet) { // Determining Time and Setting currentCondition to Moon If Appropriate
        if (currentCondition === "sunny") {
            currentCondition = "sunny";
        } else {
            currentCondition = currentCondition;
        }
    } else if (unixTime > sunRise && unixTime > sunSet) {
        if (currentCondition === "sunny") {
            currentCondition = "moon";
        } else {
            currentCondition = currentCondition;
        }
    } else if (unixTime < sunRise && unixTime < sunSet) {
        if (currentCondition === "sunny") {
            currentCondition = "moon";
        } else {
            currentCondition = currentCondition;
        }
    }

    if (currentCondition === "moon") { // If currentCondition is moon, change weather emblem
        document.getElementById('weatherPic').setAttribute("src", "moon.gif");
    }

    document.getElementById('localTime').textContent = localTime;
    document.getElementById('city').textContent = location;
    document.getElementById('callTime').textContent = weatherCallRevised; // Timestamp
    document.getElementById('temp').textContent = temperature;
    document.getElementById('minTemp').textContent = minimumTemp;
    document.getElementById('maxTemp').textContent = maximumTemp;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('feelslike').textContent = feelslike;
    document.getElementById('wind').textContent = wind;
    document.getElementById('visibil').textContent = visMeasure;
    document.getElementById('unitSpeed').textContent = currentSpeedUnit;
    document.getElementById('unitTemp').textContent = currentTempUnit;
    document.getElementById('minTempUnit').textContent = currentTempUnit;
    document.getElementById('maxTempUnit').textContent = currentTempUnit;
    document.getElementById('unitTempFeel').textContent = currentTempUnit;
    document.getElementById('visibilityUnit').textContent = currentDistanceUnit;

    cloudCheck();
};

document.getElementById('userLocationButton').addEventListener('click', function getNewLocation() { 
    let newValue = document.getElementById('userLocationInput').value;
    cityName = newValue;
    console.log(cityName); 
    getWeather(); // Allows the button to call for a new location and info from API
});

input.addEventListener('keyup', function pushEnter(event) {   // Enables 'Enter' key to trigger input to be entered from input field 
    if(event.keyCode === 13){                                 // 13 Key is Enter, when key up, will trigger 'click' event on button
        event.preventDefault();
        document.getElementById('userLocationButton').click();
    }
});

function cloudCheck() { // Checks for cloudy vs clear weather
    if (currentCondition === "cloudy") {
        document.getElementById('weatherPic').setAttribute("src", "Cloudy.gif"); 
    } else if (currentCondition === "sunny") {
        document.getElementById('weatherPic').setAttribute("src", "Sunshine.gif");
    } else if (currentCondition === "Rain"){
        document.getElementById('weatherPic').setAttribute("src", "Raining.gif");
    } else if (currentCondition === "Snow"){
        document.getElementById('weatherPic').setAttribute("src", "Snowing.gif");
    } else if (currentCondition === "Thunderstorm"){
        document.getElementById('weatherPic').setAttribute("src", "Storming.gif");
    }
}

getWeather();

async function newYorkWeatherGrab() { // New York Top Bar API Weather Call
    let newYorkAPICall = 'http://api.openweathermap.org/data/2.5/weather?q=Manhattan&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(newYorkAPICall);
    const data = await response.json();
    let locationNYTemperature = Math.round(data.main.temp);
    let cloudAmount = data.clouds.all;
    let newYorkCloudCondition = (cloudAmount > 50) ? "cloudy" : "sunny";
    let newYorkSpecialWeather = data.weather[0].main;

    if (newYorkSpecialWeather === "Rain") {
        newYorkCloudCondition = "Rain";
    } else if (newYorkSpecialWeather === "Snow") {
        newYorkCloudCondition = "Snow"
    } else if (newYorkSpecialWeather === "Thunderstorm") {
        newYorkCloudCondition = "Thunderstorm"
    } else {
        newYorkCloudCondition = newYorkCloudCondition;
    }

    if (newYorkCloudCondition === "cloudy") {
        document.getElementById('newYorkWeatherPic').setAttribute("src", "Cloudy.gif"); 
    } else if (newYorkCloudCondition === "sunny") {
        document.getElementById('newYorkWeatherPic').setAttribute("src", "Sunshine.gif");
    } else if (newYorkCloudCondition === "Rain"){
        document.getElementById('newYorkWeatherPic').setAttribute("src", "Raining.gif");
    } else if (newYorkCloudCondition === "Snow"){
        document.getElementById('newYorkWeatherPic').setAttribute("src", "Snowing.gif");
    } else if (newYorkCloudCondition === "Thunderstorm"){
        document.getElementById('newYorkWeatherPic').setAttribute("src", "Storming.gif");
    }
    
    document.getElementById('newYorkTemperature').textContent = locationNYTemperature;
    document.getElementById('topBarUnitNY').textContent = currentTempUnit;
}

newYorkWeatherGrab();

async function losAngelesWeatherGrab() { // LA Top Bar API Weather Call
    let losAngelesAPICall = 'http://api.openweathermap.org/data/2.5/weather?q=los angeles&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(losAngelesAPICall);
    const data = await response.json();
    let locationLATemperature = Math.round(data.main.temp);
    let cloudAmount = data.clouds.all;
    let losAngelesCloudCondition = (cloudAmount > 50) ? "cloudy" : "sunny";
    let losAngelesSpecialWeather = data.weather[0].main;
    
    if (losAngelesSpecialWeather === "Rain") {
        losAngelesCloudCondition = "Rain";
    } else if (losAngelesSpecialWeather === "Snow") {
        losAngelesCloudCondition = "Snow"
    } else if (losAngelesSpecialWeather === "Thunderstorm") {
        losAngelesCloudCondition = "Thunderstorm"
    } else {
        losAngelesCloudCondition = losAngelesCloudCondition;
    }

    if (losAngelesCloudCondition === "cloudy") {
        document.getElementById('losAngelesWeatherPic').setAttribute("src", "Cloudy.gif"); 
    } else if (losAngelesCloudCondition === "sunny") {
        document.getElementById('losAngelesWeatherPic').setAttribute("src", "Sunshine.gif");
    } else if (losAngelesCloudCondition === "Rain"){
        document.getElementById('losAngelesWeatherPic').setAttribute("src", "Raining.gif");
    } else if (losAngelesCloudCondition === "Snow"){
        document.getElementById('losAngelesWeatherPic').setAttribute("src", "Snowing.gif");
    } else if (losAngelesCloudCondition === "Thunderstorm"){
        document.getElementById('losAngelesWeatherPic').setAttribute("src", "Storming.gif");
    }
    
    document.getElementById('losAngelesTemperature').textContent = locationLATemperature;
    document.getElementById('topBarUnitLA').textContent = currentTempUnit;
}

losAngelesWeatherGrab();

async function bostonWeatherGrab() { // Boston Top Bar Weather Call
    let bostonAPICall = 'http://api.openweathermap.org/data/2.5/weather?q=boston&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(bostonAPICall);
    const data = await response.json();
    let locationBosTemperature = Math.round(data.main.temp);
    let cloudAmount = data.clouds.all;
    let bostonCloudCondition = (cloudAmount > 50) ? "cloudy" : "sunny";
    let bostonSpecialWeather = data.weather[0].main;

    if (bostonSpecialWeather === "Rain") {
        bostonCloudCondition = "Rain";
    } else if (bostonSpecialWeather === "Snow") {
        bostonCloudCondition = "Snow"
    } else if (bostonSpecialWeather === "Thunderstorm") {
        bostonCloudCondition = "Thunderstorm"
    } else {
        bostonCloudCondition = bostonCloudCondition;
    }

    if (bostonCloudCondition === "cloudy") {
        document.getElementById('bostonWeatherPic').setAttribute("src", "Cloudy.gif"); 
    } else if (bostonCloudCondition === "sunny") {
        document.getElementById('bostonWeatherPic').setAttribute("src", "Sunshine.gif");
    } else if (bostonCloudCondition === "Rain"){
        document.getElementById('bostonWeatherPic').setAttribute("src", "Raining.gif");
    } else if (bostonCloudCondition === "Snow"){
        document.getElementById('bostonWeatherPic').setAttribute("src", "Snowing.gif");
    } else if (bostonCloudCondition === "Thunderstorm"){
        document.getElementById('bostonWeatherPic').setAttribute("src", "Storming.gif");
    }
    
    document.getElementById('bostonTemperature').textContent = locationBosTemperature;
    document.getElementById('topBarUnitBos').textContent = currentTempUnit;
}

bostonWeatherGrab();

async function miamiWeatherGrab() { // Miami Top Bar API Call
    let miamiAPICall = 'http://api.openweathermap.org/data/2.5/weather?q=miami&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(miamiAPICall);
    const data = await response.json();
    let locationMiaTemperature = Math.round(data.main.temp);
    let cloudAmount = data.clouds.all;
    let miamiCloudCondition = (cloudAmount > 50) ? "cloudy" : "sunny";
    let miamiSpecialWeather = data.weather[0].main;

    if (miamiSpecialWeather === "Rain") {
        miamiCloudCondition = "Rain";
    } else if (miamiSpecialWeather === "Snow") {
        miamiCloudCondition = "Snow"
    } else if (miamiSpecialWeather === "Thunderstorm") {
        miamiCloudCondition = "Thunderstorm"
    } else {
        miamiCloudCondition = miamiCloudCondition;
    }

    if (miamiCloudCondition === "cloudy") {
        document.getElementById('miamiWeatherPic').setAttribute("src", "Cloudy.gif"); 
    } else if (miamiCloudCondition === "sunny") {
        document.getElementById('miamiWeatherPic').setAttribute("src", "Sunshine.gif");
    } else if (miamiCloudCondition === "Rain"){
        document.getElementById('miamiWeatherPic').setAttribute("src", "Raining.gif");
    } else if (miamiCloudCondition === "Snow"){
        document.getElementById('miamiWeatherPic').setAttribute("src", "Snowing.gif");
    } else if (miamiCloudCondition === "Thunderstorm"){
        document.getElementById('miamiWeatherPic').setAttribute("src", "Storming.gif");
    }

    document.getElementById('miamiTemperature').textContent = locationMiaTemperature;
    document.getElementById('topBarUnitMia').textContent = currentTempUnit;
}

miamiWeatherGrab();

async function dallasWeatherGrab() { // Dallas Top Bar API Call
    let dallasAPICall = 'http://api.openweathermap.org/data/2.5/weather?q=dallas&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(dallasAPICall);
    const data = await response.json();
    let locationDalTemperature = Math.round(data.main.temp);
    let cloudAmount = data.clouds.all;
    let dallasCloudCondition = (cloudAmount > 50) ? "cloudy" : "sunny";
    let dallasSpecialWeather = data.weather[0].main;

    if (dallasSpecialWeather === "Rain") {
        dallasCloudCondition = "Rain";
    } else if (dallasSpecialWeather === "Snow") {
        dallasCloudCondition = "Snow"
    } else if (dallasSpecialWeather === "Thunderstorm") {
        dallasCloudCondition = "Thunderstorm"
    } else {
        dallasCloudCondition = dallasCloudCondition;
    }

    if (dallasCloudCondition === "cloudy") {
        document.getElementById('dallasWeatherPic').setAttribute("src", "Cloudy.gif"); 
    } else if (dallasCloudCondition === "sunny") {
        document.getElementById('dallasWeatherPic').setAttribute("src", "Sunshine.gif");
    } else if (dallasCloudCondition === "Rain"){
        document.getElementById('dallasWeatherPic').setAttribute("src", "Raining.gif");
    } else if (dallasCloudCondition === "Snow"){
        document.getElementById('dallasWeatherPic').setAttribute("src", "Snowing.gif");
    } else if (dallasCloudCondition === "Thunderstorm"){
        document.getElementById('dallasWeatherPic').setAttribute("src", "Storming.gif");
    }

    document.getElementById('dallasTemperature').textContent = locationDalTemperature;
    document.getElementById('topBarUnitDal').textContent = currentTempUnit;
}

dallasWeatherGrab();