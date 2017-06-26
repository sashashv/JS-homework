var APPID = "bbbf1374035f6a13899171c4a5a8d549",
    baseUrl = "http://api.openweathermap.org/data/2.5/weather",
    container = document.getElementById('container'),
    descrip = document.getElementById('description'),
    icon = document.getElementById('icon'),
    humidity = document.getElementById('humidity'),
    pressure = document.getElementById('pressure'),
    wind = document.getElementById('wind'),
    sunrise = document.getElementById('sunrise'),
    sunset = document.getElementById('sunset'),
    temper = document.getElementById('temperature');

document.forms.weather.onsubmit = function(e) {
    e.preventDefault();
    sendRequest(this.elements.city.value);
};

function sendRequest(city) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", baseUrl + "?APPID=" + APPID
        + "&q=" + city + "&units=metric&lang=ru");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4)
            return;

        if (xhr.status == 200) {
            try {
                var data = JSON.parse(xhr.responseText);
                console.log(xhr.responseText);
                temper.textContent = 'Температура, °C : ' + Math.round(data.main.temp)+"°";
                descrip.textContent = data.weather[0].description;
                icon.innerHTML = '<img src = "http://openweathermap.org/img/w/'+ data.weather[0].icon + '.png">';
                humidity.textContent = 'Влажность, % : ' + data.main.humidity;
                pressure.textContent = 'Давление, мм : ' + hPa2mmHg(data.main.pressure);
                wind.textContent = 'Ветер, м/с : ' + (data.wind.speed).toFixed(1);
                sunrise.textContent = 'Восход ' + getSunriseDate(data.sys.sunrise);
                sunset.textContent = 'Закат ' + getSunsetDate(data.sys.sunset);
                renderMap(data.coord);
            }
            catch(e) {
                console.log(e);
            }
        }
    }
}

function renderMap(coord) {
    var mapProp= {
        center:new google.maps.LatLng(coord.lat, coord.lon),
        zoom:8
    };
    var map = new google.maps.Map(container, mapProp);
    var marker = new google.maps.Marker({
        position: mapProp.center,
        animation: google.maps.Animation.BOUNCE
    });

    marker.setMap(map);
}

function hPa2mmHg(hPa) {
    return Math.round(hPa * 0.75006375541921);
}

function getSunriseDate(date) {
    var dateSunrise = new Date(date*1000);
    return dateSunrise.getHours() + ':' + dateSunrise.getMinutes();
}

function getSunsetDate(date) {
    var dateSunset = new Date(date*1000);
    return dateSunset.getHours() + ':' + dateSunset.getMinutes();
}

