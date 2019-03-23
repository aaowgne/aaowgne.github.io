var weatherRequest = new XMLHttpRequest
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=7678dcb5254e28a8d18dc92acad6101c&units=imperial', true);
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
    
}

var weatherForecast = new XMLHttpRequest
weatherForecast.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=7678dcb5254e28a8d18dc92acad6101c&units=imperial', true);
weatherForecast.send();
weatherForecast.onload = function () {

    var weatherData = JSON.parse(weatherForecast.responseText);
    console.log(weatherData);

    
    var listDate = [];
    var listTemp = [];
    var listIconCode = [];

    for (i = 0; i < weatherData.list.length; ++i) {
        time = weatherData.list[i].dt_txt;
        if (time.includes("18:00:00")) {
            
            var date = new Date(weatherData.list[i].dt * 1000);
            var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var findDate = weekday[date.getDay()] + '<br>' + month[date.getMonth()] + ' ' + date.getDate();
            listDate.push(findDate);
            
            var temp = weatherData.list[i].main.temp_max;
            var temp = Math.round(temp);
            listTemp.push(temp);
            
            var iconcode = weatherData.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            listIconCode.push(icon_path);
        }
        continue;
    }

    //forecast date
    document.getElementById('dayone').innerHTML = listDate[0];
    document.getElementById('daytwo').innerHTML = listDate[1];
    document.getElementById('daythree').innerHTML = listDate[2];
    document.getElementById('dayfour').innerHTML = listDate[3];
    document.getElementById('dayfive').innerHTML = listDate[4];
    //weather icon
    document.getElementById('weather_icon1').src = listIconCode[0];
    document.getElementById('weather_icon2').src = listIconCode[1];
    document.getElementById('weather_icon3').src = listIconCode[2];
    document.getElementById('weather_icon4').src = listIconCode[3];
    document.getElementById('weather_icon5').src = listIconCode[4];
    //forecast temp
    document.getElementById("dayonetemp").innerHTML = listTemp[0];
    document.getElementById("daytwotemp").innerHTML = listTemp[1];
    document.getElementById("daythreetemp").innerHTML = listTemp[2];
    document.getElementById("dayfourtemp").innerHTML = listTemp[3];
    document.getElementById("dayfivetemp").innerHTML = listTemp[4];

}
var article = document.querySelector('article');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    showData(townData);
}
function showData(jsonObj) {
    var data = jsonObj['towns'];
    for (var i = 0; i < data.length; i++) {
        var name = data[i].name;
        if ((name.includes("Fish Haven")) == false) {
            continue;
        }
       
        var myDiv = document.createElement('div');
        var myList = document.createElement('ul');        
        var townEvents = data[i].events;
       
        for (var j = 0; j < townEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);
        }
        
        myDiv.appendChild(myList);
        article.appendChild(myDiv);
    }
}