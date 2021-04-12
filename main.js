"use strict";

// Known Issues
// Background limited with console up and scrolling down
// Smaller resolution messes with layout and main content

// To Do
// Add weather response features (sunshine and light background for clear weather, etc)
// Open Street Map for Weather Map?
// Convert meters to kilometers
// Top bar needs moon feature
// Add more comments for easier reading

let input = document.getElementById("userLocationInput");
let cityName = 'San Diego';
let currentTempUnit = "°C";
let currentSpeedUnit = "mps";
let currentDistanceUnit = "+ meters";
let timeStamp = new Date();
let localTime = timeStamp.toLocaleString();
let currentCondition = "cloudy";
let specialWeather = "Clear";
let latitude;
let longitude;

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
    let dayOneTempReading = parseInt(document.getElementById('dayOneTemperature').textContent);
    let dayOneMinReading = parseInt(document.getElementById('dayOneMin').textContent);
    let dayOneMaxReading = parseInt(document.getElementById('dayOneMax').textContent);
    let dayOneWindReading = parseInt(document.getElementById('dayOneWind').textContent);
    let dayTwoTempReading = parseInt(document.getElementById('dayTwoTemperature').textContent);
    let dayTwoMinReading = parseInt(document.getElementById('dayTwoMin').textContent);
    let dayTwoMaxReading = parseInt(document.getElementById('dayTwoMax').textContent);
    let dayTwoWindReading = parseInt(document.getElementById('dayTwoWind').textContent);
    let dayThreeTempReading = parseInt(document.getElementById('dayThreeTemperature').textContent);
    let dayThreeMinReading = parseInt(document.getElementById('dayThreeMin').textContent);
    let dayThreeMaxReading = parseInt(document.getElementById('dayThreeMax').textContent);
    let dayThreeWindReading = parseInt(document.getElementById('dayThreeWind').textContent);
    let dayFourTempReading = parseInt(document.getElementById('dayFourTemperature').textContent);
    let dayFourMinReading = parseInt(document.getElementById('dayFourMin').textContent);
    let dayFourMaxReading = parseInt(document.getElementById('dayFourMax').textContent);
    let dayFourWindReading = parseInt(document.getElementById('dayFourWind').textContent);
    let dayFiveTempReading = parseInt(document.getElementById('dayFiveTemperature').textContent);
    let dayFiveMinReading = parseInt(document.getElementById('dayFiveMin').textContent);
    let dayFiveMaxReading = parseInt(document.getElementById('dayFiveMax').textContent);
    let dayFiveWindReading = parseInt(document.getElementById('dayFiveWind').textContent);

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
        document.getElementById('dayOneTemperature').textContent = Math.round((dayOneTempReading * (9/5)) + 32);
        document.getElementById('dayOneMin').textContent = Math.round((dayOneMinReading * (9/5)) + 32);
        document.getElementById('dayOneMax').textContent = Math.round((dayOneMaxReading * (9/5)) + 32);
        document.getElementById('dayOneWind').textContent = Math.round(dayOneWindReading * 2.237);
        document.getElementById('dayOneUnits').textContent = currentTempUnit;
        document.getElementById('dayOneMinUnits').textContent = currentTempUnit;
        document.getElementById('dayOneMaxUnits').textContent = currentTempUnit;
        document.getElementById('dayOneWindUnits').textContent = currentSpeedUnit;
        document.getElementById('dayTwoTemperature').textContent = Math.round((dayTwoTempReading * (9/5)) + 32);
        document.getElementById('dayTwoMin').textContent = Math.round((dayTwoMinReading * (9/5)) + 32);
        document.getElementById('dayTwoMax').textContent = Math.round((dayTwoMaxReading * (9/5)) + 32);
        document.getElementById('dayTwoWind').textContent = Math.round(dayTwoWindReading * 2.237);
        document.getElementById('dayTwoUnits').textContent = currentTempUnit;
        document.getElementById('dayTwoMinUnits').textContent = currentTempUnit;
        document.getElementById('dayTwoMaxUnits').textContent = currentTempUnit;
        document.getElementById('dayTwoWindUnits').textContent = currentSpeedUnit;
        document.getElementById('dayThreeTemperature').textContent = Math.round((dayThreeTempReading * (9/5)) + 32);
        document.getElementById('dayThreeMin').textContent = Math.round((dayThreeMinReading * (9/5)) + 32);
        document.getElementById('dayThreeMax').textContent = Math.round((dayThreeMaxReading * (9/5)) + 32);
        document.getElementById('dayThreeWind').textContent = Math.round(dayThreeWindReading * 2.237);
        document.getElementById('dayThreeUnits').textContent = currentTempUnit;
        document.getElementById('dayThreeMinUnits').textContent = currentTempUnit;
        document.getElementById('dayThreeMaxUnits').textContent = currentTempUnit;
        document.getElementById('dayThreeWindUnits').textContent = currentSpeedUnit;
        document.getElementById('dayFourTemperature').textContent = Math.round((dayFourTempReading * (9/5)) + 32);
        document.getElementById('dayFourMin').textContent = Math.round((dayFourMinReading * (9/5)) + 32);
        document.getElementById('dayFourMax').textContent = Math.round((dayFourMaxReading * (9/5)) + 32);
        document.getElementById('dayFourWind').textContent = Math.round(dayFourWindReading * 2.237);
        document.getElementById('dayFourUnits').textContent = currentTempUnit;
        document.getElementById('dayFourMinUnits').textContent = currentTempUnit;
        document.getElementById('dayFourMaxUnits').textContent = currentTempUnit;
        document.getElementById('dayFourWindUnits').textContent = currentSpeedUnit;
        document.getElementById('dayFiveTemperature').textContent = Math.round((dayFiveTempReading * (9/5)) + 32);
        document.getElementById('dayFiveMin').textContent = Math.round((dayFiveMinReading * (9/5)) + 32);
        document.getElementById('dayFiveMax').textContent = Math.round((dayFiveMaxReading * (9/5)) + 32);
        document.getElementById('dayFiveWind').textContent = Math.round(dayFiveWindReading * 2.237);
        document.getElementById('dayFiveUnits').textContent = currentTempUnit;
        document.getElementById('dayFiveMinUnits').textContent = currentTempUnit;
        document.getElementById('dayFiveMaxUnits').textContent = currentTempUnit;
        document.getElementById('dayFiveWindUnits').textContent = currentSpeedUnit;

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
        document.getElementById('dayOneTemperature').textContent = Math.round((dayOneTempReading - 32) * (5/9));
        document.getElementById('dayOneMin').textContent = Math.round((dayOneMinReading - 32) * (5/9));
        document.getElementById('dayOneMax').textContent = Math.round((dayOneMaxReading - 32) * (5/9));
        document.getElementById('dayOneWind').textContent = Math.round(dayOneWindReading / 2.237);
        document.getElementById('dayOneUnits').textContent = currentTempUnit;
        document.getElementById('dayOneMinUnits').textContent = currentTempUnit;
        document.getElementById('dayOneMaxUnits').textContent = currentTempUnit;
        document.getElementById('dayOneWindUnits').textContent = currentSpeedUnit;
        document.getElementById('dayTwoTemperature').textContent = Math.round((dayTwoTempReading - 32) * (5/9));
        document.getElementById('dayTwoMin').textContent = Math.round((dayTwoMinReading - 32) * (5/9));
        document.getElementById('dayTwoMax').textContent = Math.round((dayTwoMaxReading - 32) * (5/9));
        document.getElementById('dayTwoWind').textContent = Math.round(dayTwoWindReading / 2.237);
        document.getElementById('dayTwoUnits').textContent = currentTempUnit;
        document.getElementById('dayTwoMinUnits').textContent = currentTempUnit;
        document.getElementById('dayTwoMaxUnits').textContent = currentTempUnit;
        document.getElementById('dayTwoWindUnits').textContent = currentSpeedUnit;
        document.getElementById('dayThreeTemperature').textContent = Math.round((dayThreeTempReading - 32) * (5/9));
        document.getElementById('dayThreeMin').textContent = Math.round((dayThreeMinReading - 32) * (5/9));
        document.getElementById('dayThreeMax').textContent = Math.round((dayThreeMaxReading - 32) * (5/9));
        document.getElementById('dayThreeWind').textContent = Math.round(dayThreeWindReading / 2.237);
        document.getElementById('dayThreeUnits').textContent = currentTempUnit;
        document.getElementById('dayThreeMinUnits').textContent = currentTempUnit;
        document.getElementById('dayThreeMaxUnits').textContent = currentTempUnit;
        document.getElementById('dayThreeWindUnits').textContent = currentSpeedUnit;
        document.getElementById('dayFourTemperature').textContent = Math.round((dayFourTempReading - 32) * (5/9));
        document.getElementById('dayFourMin').textContent = Math.round((dayFourMinReading - 32) * (5/9));
        document.getElementById('dayFourMax').textContent = Math.round((dayFourMaxReading - 32) * (5/9));
        document.getElementById('dayFourWind').textContent = Math.round(dayFourWindReading / 2.237);
        document.getElementById('dayFourUnits').textContent = currentTempUnit;
        document.getElementById('dayFourMinUnits').textContent = currentTempUnit;
        document.getElementById('dayFourMaxUnits').textContent = currentTempUnit;
        document.getElementById('dayFourWindUnits').textContent = currentSpeedUnit;
        document.getElementById('dayFiveTemperature').textContent = Math.round((dayFiveTempReading - 32) * (5/9));
        document.getElementById('dayFiveMin').textContent = Math.round((dayFiveMinReading - 32) * (5/9));
        document.getElementById('dayFiveMax').textContent = Math.round((dayFiveMaxReading - 32) * (5/9));
        document.getElementById('dayFiveWind').textContent = Math.round(dayFiveWindReading / 2.237);
        document.getElementById('dayFiveUnits').textContent = currentTempUnit;
        document.getElementById('dayFiveMinUnits').textContent = currentTempUnit;
        document.getElementById('dayFiveMaxUnits').textContent = currentTempUnit;
        document.getElementById('dayFiveWindUnits').textContent = currentSpeedUnit;
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
    latitude = data.coord.lat;
    longitude = data.coord.lon;

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
    getForecast();
};

async function getForecast() {
    let forecastApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude=current,minutely,hourly&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5' // Forecast API
    const response = await fetch(forecastApi);
    const data = await response.json();
    let dayOneUnix = data.daily[1].dt;  // So many variables just for month and day...shewt
    let dayOneDate = new Date(dayOneUnix * 1000);
    let dayOneMonth = dayOneDate.getMonth() + 1;
    let dayOneDay = dayOneDate.getDate();
    let dayOneClouds = data.daily[1].clouds;
    let dayOneCondition = "Clear";
    let dayOneSpecial = data.daily[1].weather[0].main;
    let dayTwoUnix = data.daily[2].dt;
    let dayTwoDate = new Date(dayTwoUnix * 1000);
    let dayTwoMonth = dayTwoDate.getMonth() + 1;
    let dayTwoDay = dayTwoDate.getDate();
    let dayTwoClouds = data.daily[2].clouds;
    let dayTwoCondition = "Clear";
    let dayTwoSpecial = data.daily[2].weather[0].main;
    let dayThreeUnix = data.daily[3].dt;
    let dayThreeDate = new Date(dayThreeUnix * 1000);
    let dayThreeMonth = dayThreeDate.getMonth() + 1;
    let dayThreeDay = dayThreeDate.getDate();
    let dayThreeClouds = data.daily[3].clouds;
    let dayThreeCondition = "Clear";
    let dayThreeSpecial = data.daily[3].weather[0].main;
    let dayFourUnix = data.daily[4].dt;
    let dayFourDate = new Date(dayFourUnix * 1000);
    let dayFourMonth = dayFourDate.getMonth() + 1;
    let dayFourDay = dayFourDate.getDate();
    let dayFourClouds = data.daily[4].clouds;
    let dayFourCondition = "Clear";
    let dayFourSpecial = data.daily[4].weather[0].main;
    let dayFiveUnix = data.daily[5].dt;
    let dayFiveDate = new Date(dayFiveUnix * 1000);
    let dayFiveMonth = dayFiveDate.getMonth() + 1;
    let dayFiveDay = dayFiveDate.getDate();
    let dayFiveClouds = data.daily[5].clouds;
    let dayFiveCondition = "Clear";
    let dayFiveSpecial = data.daily[5].weather[0].main;

    dayOneCondition = (dayOneClouds > 50) ? "cloudy" : "sunny";

    if (dayOneSpecial === "Rain") {  // Weather emblem changes specific to special weather conditions
        dayOneCondition = "Rain";
    } else if (dayOneSpecial === "Snow") {
        dayOneCondition = "Snow"
    } else if (dayOneSpecial === "Thunderstorm") {
        dayOneCondition = "Thunderstorm"
    } else {
        dayOneCondition = dayOneCondition;
    }

    if (dayOneCondition === "cloudy") {
        document.getElementById('dayOnePic').setAttribute("src", "Cloudy.gif"); 
    } else if (dayOneCondition === "sunny") {
        document.getElementById('dayOnePic').setAttribute("src", "Sunshine.gif");
    } else if (dayOneCondition === "Rain"){
        document.getElementById('dayOnePic').setAttribute("src", "Raining.gif");
    } else if (dayOneCondition === "Snow"){
        document.getElementById('dayOnePic').setAttribute("src", "Snowing.gif");
    } else if (dayOneCondition === "Thunderstorm"){
        document.getElementById('dayOnePic').setAttribute("src", "Storming.gif");
    }

    dayTwoCondition = (dayTwoClouds > 50) ? "cloudy" : "sunny";

    if (dayTwoSpecial === "Rain") {  // Weather emblem changes specific to special weather conditions
        dayTwoCondition = "Rain";
    } else if (dayTwoSpecial === "Snow") {
        dayTwoCondition = "Snow"
    } else if (dayTwoSpecial === "Thunderstorm") {
        dayTwoCondition = "Thunderstorm"
    } else {
        dayTwoCondition = dayTwoCondition;
    }

    if (dayTwoCondition === "cloudy") {
        document.getElementById('dayTwoPic').setAttribute("src", "Cloudy.gif"); 
    } else if (dayTwoCondition === "sunny") {
        document.getElementById('dayTwoPic').setAttribute("src", "Sunshine.gif");
    } else if (dayTwoCondition === "Rain"){
        document.getElementById('dayTwoPic').setAttribute("src", "Raining.gif");
    } else if (dayTwoCondition === "Snow"){
        document.getElementById('dayTwoPic').setAttribute("src", "Snowing.gif");
    } else if (dayTwoCondition === "Thunderstorm"){
        document.getElementById('dayTwoPic').setAttribute("src", "Storming.gif");
    }

    dayThreeCondition = (dayThreeClouds > 50) ? "cloudy" : "sunny";

    if (dayThreeSpecial === "Rain") {  // Weather emblem changes specific to special weather conditions
        dayThreeCondition = "Rain";
    } else if (dayThreeSpecial === "Snow") {
        dayThreeCondition = "Snow"
    } else if (dayThreeSpecial === "Thunderstorm") {
        dayThreeCondition = "Thunderstorm"
    } else {
        dayThreeCondition = dayThreeCondition;
    }

    if (dayThreeCondition === "cloudy") {
        document.getElementById('dayThreePic').setAttribute("src", "Cloudy.gif"); 
    } else if (dayThreeCondition === "sunny") {
        document.getElementById('dayThreePic').setAttribute("src", "Sunshine.gif");
    } else if (dayThreeCondition === "Rain"){
        document.getElementById('dayThreePic').setAttribute("src", "Raining.gif");
    } else if (dayThreeCondition === "Snow"){
        document.getElementById('dayThreePic').setAttribute("src", "Snowing.gif");
    } else if (dayThreeCondition === "Thunderstorm"){
        document.getElementById('dayThreePic').setAttribute("src", "Storming.gif");
    }

    dayFourCondition = (dayFourClouds > 50) ? "cloudy" : "sunny";

    if (dayFourSpecial === "Rain") {  // Weather emblem changes specific to special weather conditions
        dayFourCondition = "Rain";
    } else if (dayFourSpecial === "Snow") {
        dayFourCondition = "Snow"
    } else if (dayFourSpecial === "Thunderstorm") {
        dayFourCondition = "Thunderstorm"
    } else {
        dayFourCondition = dayFourCondition;
    }

    if (dayFourCondition === "cloudy") {
        document.getElementById('dayFourPic').setAttribute("src", "Cloudy.gif"); 
    } else if (dayFourCondition === "sunny") {
        document.getElementById('dayFourPic').setAttribute("src", "Sunshine.gif");
    } else if (dayFourCondition === "Rain"){
        document.getElementById('dayFourPic').setAttribute("src", "Raining.gif");
    } else if (dayFourCondition === "Snow"){
        document.getElementById('dayFourPic').setAttribute("src", "Snowing.gif");
    } else if (dayFourCondition === "Thunderstorm"){
        document.getElementById('dayFourPic').setAttribute("src", "Storming.gif");
    }

    dayFiveCondition = (dayFiveClouds > 50) ? "cloudy" : "sunny";

    if (dayFiveSpecial === "Rain") {  // Weather emblem changes specific to special weather conditions
        dayFiveCondition = "Rain";
    } else if (dayFiveSpecial === "Snow") {
        dayFiveCondition = "Snow"
    } else if (dayFiveSpecial === "Thunderstorm") {
        dayFiveCondition = "Thunderstorm"
    } else {
        dayFiveCondition = dayFiveCondition;
    }

    if (dayFiveCondition === "cloudy") {
        document.getElementById('dayFivePic').setAttribute("src", "Cloudy.gif"); 
    } else if (dayFiveCondition === "sunny") {
        document.getElementById('dayFivePic').setAttribute("src", "Sunshine.gif");
    } else if (dayFiveCondition === "Rain"){
        document.getElementById('dayFivePic').setAttribute("src", "Raining.gif");
    } else if (dayFiveCondition === "Snow"){
        document.getElementById('dayFivePic').setAttribute("src", "Snowing.gif");
    } else if (dayFiveCondition === "Thunderstorm"){
        document.getElementById('dayFivePic').setAttribute("src", "Storming.gif");
    }

    document.getElementById('dayOneForeDate').textContent = dayOneMonth.toString() + "/" + dayOneDay.toString();
    document.getElementById('dayOneTemperature').textContent = Math.round(data.daily[1].temp.day);
    document.getElementById('dayOneUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayOneMin').textContent = Math.round(data.daily[1].temp.min);
    document.getElementById('dayOneMinUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayOneMax').textContent = Math.round(data.daily[1].temp.max);
    document.getElementById('dayOneMaxUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayOneWind').textContent = Math.round(data.daily[1].wind_speed);
    document.getElementById('dayOneHumidity').textContent = Math.round(data.daily[1].humidity);
    document.getElementById('dayOnePressure').textContent = Math.round(data.daily[1].pressure);
    document.getElementById('dayOneWindUnits').textContent = currentSpeedUnit;

    document.getElementById('dayTwoForeDate').textContent = dayTwoMonth.toString() + "/" + dayTwoDay.toString();
    document.getElementById('dayTwoTemperature').textContent = Math.round(data.daily[2].temp.day);
    document.getElementById('dayTwoUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayTwoMin').textContent = Math.round(data.daily[2].temp.min);
    document.getElementById('dayTwoMinUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayTwoMax').textContent = Math.round(data.daily[2].temp.max);
    document.getElementById('dayTwoMaxUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayTwoWind').textContent = Math.round(data.daily[2].wind_speed);
    document.getElementById('dayTwoHumidity').textContent = Math.round(data.daily[2].humidity);
    document.getElementById('dayTwoPressure').textContent = Math.round(data.daily[2].pressure);
    document.getElementById('dayTwoWindUnits').textContent = currentSpeedUnit;

    document.getElementById('dayThreeForeDate').textContent = dayThreeMonth.toString() + "/" + dayThreeDay.toString();
    document.getElementById('dayThreeTemperature').textContent = Math.round(data.daily[3].temp.day);
    document.getElementById('dayThreeUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayThreeMin').textContent = Math.round(data.daily[3].temp.min);
    document.getElementById('dayThreeMinUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayThreeMax').textContent = Math.round(data.daily[3].temp.max);
    document.getElementById('dayThreeMaxUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayThreeWind').textContent = Math.round(data.daily[3].wind_speed);
    document.getElementById('dayThreeHumidity').textContent = Math.round(data.daily[3].humidity);
    document.getElementById('dayThreePressure').textContent = Math.round(data.daily[3].pressure);
    document.getElementById('dayThreeWindUnits').textContent = currentSpeedUnit;

    document.getElementById('dayFourForeDate').textContent = dayFourMonth.toString() + "/" + dayFourDay.toString();
    document.getElementById('dayFourTemperature').textContent = Math.round(data.daily[4].temp.day);
    document.getElementById('dayFourUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFourMin').textContent = Math.round(data.daily[4].temp.min);
    document.getElementById('dayFourMinUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFourMax').textContent = Math.round(data.daily[4].temp.max);
    document.getElementById('dayFourMaxUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFourWind').textContent = Math.round(data.daily[4].wind_speed);
    document.getElementById('dayFourHumidity').textContent = Math.round(data.daily[4].humidity);
    document.getElementById('dayFourPressure').textContent = Math.round(data.daily[4].pressure);
    document.getElementById('dayFourWindUnits').textContent = currentSpeedUnit;

    document.getElementById('dayFiveForeDate').textContent = dayFiveMonth.toString() + "/" + dayFiveDay.toString();
    document.getElementById('dayFiveTemperature').textContent = Math.round(data.daily[5].temp.day);
    document.getElementById('dayFiveUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFiveMin').textContent = Math.round(data.daily[5].temp.min);
    document.getElementById('dayFiveMinUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFiveMax').textContent = Math.round(data.daily[5].temp.max);
    document.getElementById('dayFiveMaxUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFiveWind').textContent = Math.round(data.daily[5].wind_speed);
    document.getElementById('dayFiveHumidity').textContent = Math.round(data.daily[5].humidity);
    document.getElementById('dayFivePressure').textContent = Math.round(data.daily[5].pressure);
    document.getElementById('dayFiveWindUnits').textContent = currentSpeedUnit;

    console.log(data);
}

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

document.getElementById('userLocationButton').addEventListener('click', function getNewLocation() { 
    let newValue = document.getElementById('userLocationInput').value;
    let toggleButtonVal = document.getElementById('unitButton').innerHTML;
    cityName = newValue;
    console.log(cityName); 
    if (toggleButtonVal === 'Imperial') {                 // Mimic toggle button if 'imperial'
        document.getElementById('unitButton').click();
    }
    getWeather(); // Allows the button to call for a new location and info from APIs
});

input.addEventListener('keyup', function pushEnter(event) {   // Enables 'Enter' key to trigger input to be entered from input field 
    if(event.keyCode === 13){                                 // 13 Key is Enter, when key up, will trigger 'click' event on button
        event.preventDefault();
        document.getElementById('userLocationButton').click();
    }
});