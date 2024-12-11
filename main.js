"use strict";

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

// ----------------------------------- Toggle Button ------------------------------------------------- //

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

// ----------------------------------- Primary Weather API ------------------------------------------------- //

async function getWeather() {
    let basic_api_URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5'; // Changes API call for the cityName entered
    const response = await fetch(basic_api_URL);
    const data = await response.json();
    // console.log(data);
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

    document.getElementById('localTime').textContent = localTime; // Local Time
    document.getElementById('localTimeMobile').textContent = localTime; // Mobile equivelent
    document.getElementById('city').textContent = location;
    document.getElementById('callTime').textContent = weatherCallRevised; // Timestamp for weather's location
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

// ----------------------------------- Forecasted Weather API ------------------------------------------------- //

async function getForecast() {
    let forecastApi = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&exclude=current,minutely,hourly&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5' // Forecast API
    const response = await fetch(forecastApi);
    const data = await response.json();
    console.log(data)
    let dayOneUnix = data.list[1].dt;  // So many variables just for month and day...shewt
    let dayOneDate = new Date(dayOneUnix * 1000); // Me -2021
    let dayOneMonth = dayOneDate.getMonth() + 1;
    let dayOneDay = dayOneDate.getDate();  // Hey past me, it's future you. We learned how to do this better. I'm going to keep it this way, as a
    let dayOneClouds = data.list[1].clouds; // token to all the work you put in on this first project. But hey, first project and I'm still 
    let dayOneCondition = "Clear";  // maintaining it. Me -December 10th, 2024
    let dayOneSpecial = data.list[1].weather[0].main;
    let dayTwoUnix = data.list[2].dt;
    let dayTwoDate = new Date(dayTwoUnix * 1000);
    let dayTwoMonth = dayTwoDate.getMonth() + 1;
    let dayTwoDay = dayTwoDate.getDate() + 1; // Don't look at this
    let dayTwoClouds = data.list[2].clouds;
    let dayTwoCondition = "Clear";
    let dayTwoSpecial = data.list[2].weather[0].main;
    let dayThreeUnix = data.list[3].dt;
    let dayThreeDate = new Date(dayThreeUnix * 1000);
    let dayThreeMonth = dayThreeDate.getMonth() + 1;
    let dayThreeDay = dayThreeDate.getDate() + 2; // Or this
    let dayThreeClouds = data.list[3].clouds;
    let dayThreeCondition = "Clear";
    let dayThreeSpecial = data.list[3].weather[0].main;
    let dayFourUnix = data.list[4].dt;
    let dayFourDate = new Date(dayFourUnix * 1000);
    let dayFourMonth = dayFourDate.getMonth() + 1;
    let dayFourDay = dayFourDate.getDate() + 3; // >.>
    let dayFourClouds = data.list[4].clouds;
    let dayFourCondition = "Clear";
    let dayFourSpecial = data.list[4].weather[0].main;
    let dayFiveUnix = data.list[5].dt;
    let dayFiveDate = new Date(dayFiveUnix * 1000);
    let dayFiveMonth = dayFiveDate.getMonth() + 1;
    let dayFiveDay = dayFiveDate.getDate() + 4; // x.x
    let dayFiveClouds = data.list[5].clouds;
    let dayFiveCondition = "Clear";
    let dayFiveSpecial = data.list[5].weather[0].main;

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
    document.getElementById('dayOneTemperature').textContent = Math.round(data.list[1].main.temp);
    document.getElementById('dayOneUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayOneMin').textContent = Math.round(data.list[1].main.temp_min);
    document.getElementById('dayOneMinUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayOneMax').textContent = Math.round(data.list[1].main.temp_max);
    document.getElementById('dayOneMaxUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayOneWind').textContent = Math.round(data.list[1].wind.speed);
    document.getElementById('dayOneHumidity').textContent = Math.round(data.list[1].main.humidity);
    document.getElementById('dayOnePressure').textContent = Math.round(data.list[1].main.pressure);
    document.getElementById('dayOneWindUnits').textContent = currentSpeedUnit;

    document.getElementById('dayTwoForeDate').textContent = dayTwoMonth.toString() + "/" + dayTwoDay.toString();
    document.getElementById('dayTwoTemperature').textContent = Math.round(data.list[2].main.temp);
    document.getElementById('dayTwoUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayTwoMin').textContent = Math.round(data.list[2].main.temp_min);
    document.getElementById('dayTwoMinUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayTwoMax').textContent = Math.round(data.list[2].main.temp_max);
    document.getElementById('dayTwoMaxUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayTwoWind').textContent = Math.round(data.list[2].wind.speed);
    document.getElementById('dayTwoHumidity').textContent = Math.round(data.list[2].main.humidity);
    document.getElementById('dayTwoPressure').textContent = Math.round(data.list[2].main.pressure);
    document.getElementById('dayTwoWindUnits').textContent = currentSpeedUnit;

    document.getElementById('dayThreeForeDate').textContent = dayThreeMonth.toString() + "/" + dayThreeDay.toString();
    document.getElementById('dayThreeTemperature').textContent = Math.round(data.list[3].main.temp);
    document.getElementById('dayThreeUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayThreeMin').textContent = Math.round(data.list[3].main.temp_min);
    document.getElementById('dayThreeMinUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayThreeMax').textContent = Math.round(data.list[3].main.temp_max);
    document.getElementById('dayThreeMaxUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayThreeWind').textContent = Math.round(data.list[3].wind.speed);
    document.getElementById('dayThreeHumidity').textContent = Math.round(data.list[3].main.humidity);
    document.getElementById('dayThreePressure').textContent = Math.round(data.list[3].main.pressure);
    document.getElementById('dayThreeWindUnits').textContent = currentSpeedUnit;

    document.getElementById('dayFourForeDate').textContent = dayFourMonth.toString() + "/" + dayFourDay.toString();
    document.getElementById('dayFourTemperature').textContent = Math.round(data.list[4].main.temp);
    document.getElementById('dayFourUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFourMin').textContent = Math.round(data.list[4].main.temp_min);
    document.getElementById('dayFourMinUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFourMax').textContent = Math.round(data.list[4].main.temp_max);
    document.getElementById('dayFourMaxUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFourWind').textContent = Math.round(data.list[4].wind.speed);
    document.getElementById('dayFourHumidity').textContent = Math.round(data.list[4].main.humidity);
    document.getElementById('dayFourPressure').textContent = Math.round(data.list[4].main.pressure);
    document.getElementById('dayFourWindUnits').textContent = currentSpeedUnit;

    document.getElementById('dayFiveForeDate').textContent = dayFiveMonth.toString() + "/" + dayFiveDay.toString();
    document.getElementById('dayFiveTemperature').textContent = Math.round(data.list[5].main.temp);
    document.getElementById('dayFiveUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFiveMin').textContent = Math.round(data.list[5].main.temp_min);
    document.getElementById('dayFiveMinUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFiveMax').textContent = Math.round(data.list[5].main.temp_max);
    document.getElementById('dayFiveMaxUnits').textContent = " " + currentTempUnit;
    document.getElementById('dayFiveWind').textContent = Math.round(data.list[5].wind.speed);
    document.getElementById('dayFiveHumidity').textContent = Math.round(data.list[5].main.humidity);
    document.getElementById('dayFivePressure').textContent = Math.round(data.list[5].main.pressure);
    document.getElementById('dayFiveWindUnits').textContent = currentSpeedUnit;
}

// ----------------------------------- Cloud Check & Special Weather Function ------------------------------------------------- //

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

// ----------------------------------- New York API ------------------------------------------------- //

async function newYorkWeatherGrab() { // New York Top Bar API Weather Call
    let newYorkAPICall = 'https://api.openweathermap.org/data/2.5/weather?q=Manhattan&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(newYorkAPICall);
    const data = await response.json();
    let locationNYTemperature = Math.round(data.main.temp);
    let cloudAmount = data.clouds.all;
    let newYorkCloudCondition = (cloudAmount > 50) ? "cloudy" : "sunny";
    let newYorkSpecialWeather = data.weather[0].main;
    let newYorkUnix = data.dt;
    let newYorkSunRise = data.sys.sunrise;
    let newYorkSunSet = data.sys.sunset;

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
    
    if (newYorkUnix > newYorkSunRise && newYorkUnix < newYorkSunSet) { 
        if (newYorkCloudCondition === "sunny") {
            newYorkCloudCondition = "sunny";
        } else {
            newYorkCloudCondition = newYorkCloudCondition;
        }
    } else if (newYorkUnix > newYorkSunRise && newYorkUnix > newYorkSunSet) {
        if (newYorkCloudCondition === "sunny") {
            newYorkCloudCondition = "moon";
        } else {
            newYorkCloudCondition = newYorkCloudCondition;
        }
    } else if (newYorkUnix < newYorkSunRise && newYorkUnix < newYorkSunSet) {
        if (newYorkCloudCondition === "sunny") {
            newYorkCloudCondition = "moon";
        } else {
            newYorkCloudCondition = newYorkCloudCondition;
        }
    }

    if (newYorkCloudCondition === "moon") { // If currentCondition is moon, change weather emblem
        document.getElementById('newYorkWeatherPic').setAttribute("src", "moon.gif");
    }

    document.getElementById('newYorkTemperature').textContent = locationNYTemperature;
    document.getElementById('topBarUnitNY').textContent = currentTempUnit;
}

newYorkWeatherGrab();

// ----------------------------------- Los Angeles API ------------------------------------------------- //

async function losAngelesWeatherGrab() { // LA Top Bar API Weather Call
    let losAngelesAPICall = 'https://api.openweathermap.org/data/2.5/weather?q=los angeles&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(losAngelesAPICall);
    const data = await response.json();
    let locationLATemperature = Math.round(data.main.temp);
    let cloudAmount = data.clouds.all;
    let losAngelesCloudCondition = (cloudAmount > 50) ? "cloudy" : "sunny";
    let losAngelesSpecialWeather = data.weather[0].main;
    let losAngelesUnix = data.dt;
    let losAngelesSunRise = data.sys.sunrise;
    let losAngelesSunSet = data.sys.sunset;
    
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

    if (losAngelesUnix > losAngelesSunRise && losAngelesUnix < losAngelesSunSet) { 
        if (losAngelesCloudCondition === "sunny") {
            losAngelesCloudCondition = "sunny";
        } else {
            losAngelesCloudCondition = losAngelesCloudCondition;
        }
    } else if (losAngelesUnix > losAngelesSunRise && losAngelesUnix > losAngelesSunSet) {
        if (losAngelesCloudCondition === "sunny") {
            losAngelesCloudCondition = "moon";
        } else {
            losAngelesCloudCondition = losAngelesCloudCondition;
        }
    } else if (losAngelesUnix < losAngelesSunRise && losAngelesUnix < losAngelesSunSet) {
        if (losAngelesCloudCondition === "sunny") {
            losAngelesCloudCondition = "moon";
        } else {
            losAngelesCloudCondition = losAngelesCloudCondition;
        }
    }
    
    if (losAngelesCloudCondition === "moon") { // If currentCondition is moon, change weather emblem
        document.getElementById('losAngelesWeatherPic').setAttribute("src", "moon.gif");
    }

    document.getElementById('losAngelesTemperature').textContent = locationLATemperature;
    document.getElementById('topBarUnitLA').textContent = currentTempUnit;
}

losAngelesWeatherGrab();

// ----------------------------------- Boston API ------------------------------------------------- //

async function bostonWeatherGrab() { // Boston Top Bar Weather Call
    let bostonAPICall = 'https://api.openweathermap.org/data/2.5/weather?q=boston&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(bostonAPICall);
    const data = await response.json();
    let locationBosTemperature = Math.round(data.main.temp);
    let cloudAmount = data.clouds.all;
    let bostonCloudCondition = (cloudAmount > 50) ? "cloudy" : "sunny";
    let bostonSpecialWeather = data.weather[0].main;
    let bostonUnix = data.dt;
    let bostonSunRise = data.sys.sunrise;
    let bostonSunSet = data.sys.sunset;

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

    if (bostonUnix > bostonSunRise && bostonUnix < bostonSunSet) { 
        if (bostonCloudCondition === "sunny") {
            bostonCloudCondition = "sunny";
        } else {
            bostonCloudCondition = bostonCloudCondition;
        }
    } else if (bostonUnix > bostonSunRise && bostonUnix > bostonSunSet) {
        if (bostonCloudCondition === "sunny") {
            bostonCloudCondition = "moon";
        } else {
            bostonCloudCondition = bostonCloudCondition;
        }
    } else if (bostonUnix < bostonSunRise && bostonUnix < bostonSunSet) {
        if (bostonCloudCondition === "sunny") {
            bostonCloudCondition = "moon";
        } else {
            bostonCloudCondition = bostonCloudCondition;
        }
    }
    
    if (bostonCloudCondition === "moon") { // If currentCondition is moon, change weather emblem
        document.getElementById('bostonWeatherPic').setAttribute("src", "moon.gif");
    }

    document.getElementById('bostonTemperature').textContent = locationBosTemperature;
    document.getElementById('topBarUnitBos').textContent = currentTempUnit;
}

bostonWeatherGrab();

// ----------------------------------- Miami API ------------------------------------------------- //

async function miamiWeatherGrab() { // Miami Top Bar API Call
    let miamiAPICall = 'https://api.openweathermap.org/data/2.5/weather?q=miami&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(miamiAPICall);
    const data = await response.json();
    let locationMiaTemperature = Math.round(data.main.temp);
    let cloudAmount = data.clouds.all;
    let miamiCloudCondition = (cloudAmount > 50) ? "cloudy" : "sunny";
    let miamiSpecialWeather = data.weather[0].main;
    let miamiUnix = data.dt;
    let miamiSunRise = data.sys.sunrise;
    let miamiSunSet = data.sys.sunset;

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

    if (miamiUnix > miamiSunRise && miamiUnix < miamiSunSet) { 
        if (miamiCloudCondition === "sunny") {
            miamiCloudCondition = "sunny";
        } else {
            miamiCloudCondition = miamiCloudCondition;
        }
    } else if (miamiUnix > miamiSunRise && miamiUnix > miamiSunSet) {
        if (miamiCloudCondition === "sunny") {
            miamiCloudCondition = "moon";
        } else {
            miamiCloudCondition = miamiCloudCondition;
        }
    } else if (miamiUnix < miamiSunRise && miamiUnix < miamiSunSet) {
        if (miamiCloudCondition === "sunny") {
            miamiCloudCondition = "moon";
        } else {
            miamiCloudCondition = miamiCloudCondition;
        }
    }
    
    if (miamiCloudCondition === "moon") { // If currentCondition is moon, change weather emblem
        document.getElementById('miamiWeatherPic').setAttribute("src", "moon.gif");
    }

    document.getElementById('miamiTemperature').textContent = locationMiaTemperature;
    document.getElementById('topBarUnitMia').textContent = currentTempUnit;
}

miamiWeatherGrab();

// ----------------------------------- Dallas API ------------------------------------------------- //

async function dallasWeatherGrab() { // Dallas Top Bar API Call
    let dallasAPICall = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&units=metric&appid=278afa8fabdf943e1a3ead235406b4a5';
    const response = await fetch(dallasAPICall);
    const data = await response.json();
    let locationDalTemperature = Math.round(data.main.temp);
    let cloudAmount = data.clouds.all;
    let dallasCloudCondition = (cloudAmount > 50) ? "cloudy" : "sunny";
    let dallasSpecialWeather = data.weather[0].main;
    let dallasUnix = data.dt;
    let dallasSunRise = data.sys.sunrise;
    let dallasSunSet = data.sys.sunset;

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

    if (dallasUnix > dallasSunRise && dallasUnix < dallasSunSet) { 
        if (dallasCloudCondition === "sunny") {
            dallasCloudCondition = "sunny";
        } else {
            dallasCloudCondition = dallasCloudCondition;
        }
    } else if (dallasUnix > dallasSunRise && dallasUnix > dallasSunSet) {
        if (dallasCloudCondition === "sunny") {
            dallasCloudCondition = "moon";
        } else {
            dallasCloudCondition = dallasCloudCondition;
        }
    } else if (dallasUnix < dallasSunRise && dallasUnix < dallasSunSet) {
        if (dallasCloudCondition === "sunny") {
            dallasCloudCondition = "moon";
        } else {
            dallasCloudCondition = dallasCloudCondition;
        }
    }
    
    if (dallasCloudCondition === "moon") { // If currentCondition is moon, change weather emblem
        document.getElementById('dallasWeatherPic').setAttribute("src", "moon.gif");
    }

    document.getElementById('dallasTemperature').textContent = locationDalTemperature;
    document.getElementById('topBarUnitDal').textContent = currentTempUnit;
}

dallasWeatherGrab();

// ----------------------------------- Search Location 'Go!' Button ------------------------------------------------- //

document.getElementById('userLocationButton').addEventListener('click', function getNewLocation() { 
    let newValue = document.getElementById('userLocationInput').value;
    let toggleButtonVal = document.getElementById('unitButton').innerHTML;
    cityName = newValue;
    console.log(cityName); 
    if (toggleButtonVal === 'Imperial') {                 // Mimic toggle button if 'imperial' to prevent bug
        document.getElementById('unitButton').click();
    }
    getWeather(); // Allows the button to call for a new location and info from APIs
});

// ----------------------------------- Pushing 'Enter' Functionality for 'Go!' ------------------------------------------------- //

input.addEventListener('keyup', function pushEnter(event) {   // Enables 'Enter' key to trigger input to be entered from input field 
    if(event.keyCode === 13){                                 // 13 Key is Enter, when key up, will trigger 'click' event on button
        event.preventDefault();
        document.getElementById('userLocationButton').click();
    }
});
throw new Error('Thanks for viewing my project!')

// Hey viewer, this is the 2024 version of me. If you saw that error and looked at the sources just to reach this point...please read just a little bit more.

// This was my first solo project attempt and I was soooo proud of it. I know it's pretty rough, I believe I knew back then too. Please don't judge.
// Also, behold below, my ambitious past self left us something:
// \/      \/
// Known Issues
// Background limited with console up and scrolling down
// Top bar needs new size cut-off or change to style for small resolution

// To Do
// Add weather response features (sunshine and light background for clear weather, etc)
// Open Street Map for Weather Map?
// Convert meters to kilometers
// Site name and logo
// Work On Mobile Responsiveness More