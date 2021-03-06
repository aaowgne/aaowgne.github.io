var weatherRequest = new XMLHttpRequest
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-111.89&appid=7678dcb5254e28a8d18dc92acad6101c&units=imperial', true);
weatherRequest.send();
weatherRequest.onload = function () {

    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('weatherDesc').innerHTML = weatherData.weather[0].description;
    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;
    document.getElementById('windDirection').innerHTML = weatherData.wind.deg;

    var windChill = 35.74 + 0.6215 * weatherData.main.temp - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 * weatherData.main.temp * Math.pow(weatherData.wind.speed, 0.16);
    windChill = Math.round(windChill);
    document.getElementById("windChill").innerHTML = windChill;
    
    let d = [weatherData.wind.deg];
let dir = "";

/*Convert degrees to direction*/

if ((d >= 337 && d <= 360) || (d >=0 && d <= 22)) {
dir ="N";
}

else if (d >= 23 && d <= 67) {
dir ="NE";
}

else if (d >= 68 && d <= 112) {
dir ="E";
}

else if (d >= 113 && d <= 157) {
dir ="SE";
}

else if (d >= 158 && d <= 202) {
dir ="S";
}

else if (d >= 203 && d <= 246) {
dir ="SW";
}

else if (d >= 247 && d <= 290) {
dir ="W";
}

else dir = "NW"

/*Define span id of 'direction' and get element from variable 'dir'*/

document.getElementById("windDirection").textContent=dir;
}
var article = document.querySelector('article');
var requestURL = 'https://aaowgne.github.io/final-project/templedata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var templeData = request.response;
    showData(templeData);
}
function showData(jsonObj) {
    var data = jsonObj['temples'];
    for (var i = 0; i < data.length; i++) {
        var name = data[i].name;
        if ((name.includes("Salt Lake")) == false) {
            continue;
        }
       
        var myDiv = document.createElement('div');
        var myList = document.createElement('ul');        
        var templeEvents = data[i].events;
       
        for (var j = 0; j < templeEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = templeEvents[j];
            myList.appendChild(listItem);
        }
        
        myDiv.appendChild(myList);
        article.appendChild(myDiv);
    }
}