var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import API from "./API";
import "./style.scss";
function fetchCity() {
    return __awaiter(this, void 0, void 0, function () {
        var City;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, API("texas")];
                case 1:
                    City = _a.sent();
                    mainInfo(City);
                    Days(City);
                    BackgroundAndFont(City);
                    return [2 /*return*/];
            }
        });
    });
}
localStorage.clear();
var cachecities = [];
if (localStorage.getItem("cities")) {
    cachecities = JSON.parse(localStorage.getItem("cities"));
}
fetchCity();
function mainInfo(City) {
    console.log(City);
    var CityNameS = City.location.name;
    var CityName = document.getElementById("City");
    CityName.innerHTML = CityNameS;
    var Date = document.getElementById("Time");
    Date.innerHTML = City.location.localtime.split(" ")[1] + "|";
    var Temp = document.getElementById("Temp");
    Temp.innerHTML = City.forecast.forecastday[0].day.avgtemp_c + "°C";
    var svg = document.getElementById("Icon");
    svg.src = "https:" + City.forecast.forecastday[0].day.condition.icon;
    var Humidity = document.getElementById("Humidity");
    Humidity.innerHTML = "H: " + City.current.humidity + "%";
    var ChanceOfRain = document.getElementById("ChanceOfRain");
    ChanceOfRain.innerHTML =
        "R:" + City.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    if (cachecities.length > 5) {
        console.log("more than 5");
        cachecities.pop();
    }
    if (!cachecities.some(function (cachedCity) { return cachedCity.location.name === CityName; })) {
        cachecities.push(City);
        localStorage.setItem("cities", JSON.stringify(cachecities));
    }
    console.log(cachecities);
    hours(City);
}
function hours(City) {
    var hours = document.getElementById("HourlyContainer");
    hours.innerHTML = "";
    var currentTime = City.current.last_updated.split(" ")[1].split(":")[0];
    var hourTime = City.forecast.forecastday[0].hour[0].time
        .split(" ")[1]
        .split(":")[0];
    var i = 0;
    while (currentTime !== hourTime && i < 24) {
        hourTime = City.forecast.forecastday[0].hour[++i].time
            .split(" ")[1]
            .split(":")[0];
    }
    var dayIndex = 0;
    var NewDayHoursIndex = 0;
    while (NewDayHoursIndex < 24) {
        if (i === 24) {
            i = 0;
            dayIndex++;
        }
        NewDayHoursIndex++;
        var hour = document.createElement("div");
        hour.classList.add("HourlyInfo");
        var hourTime_1 = document.createElement("h3");
        hourTime_1.classList.add("HourlyTime");
        var hourTemp = document.createElement("h3");
        hourTemp.classList.add("HourlyTemp");
        var hourIcon = document.createElement("img");
        hourIcon.classList.add("HourlyIcon");
        var time = parseInt(City.forecast.forecastday[dayIndex].hour[i++].time.split(" ")[1].split(":")[0]);
        if (time === parseInt(City.current.last_updated.split(" ")[1].split(":")[0])) {
            hourTime_1.innerHTML = "Now";
        }
        else {
            var twelveHourTime = time % 12 || 12;
            if (time === 0) {
                hourTime_1.innerHTML = "12:00 AM";
            }
            else if (time > 12) {
                hourTime_1.innerHTML = twelveHourTime + ":00 PM";
            }
            else {
                hourTime_1.innerHTML = twelveHourTime + ":00 AM";
            }
        }
        hourTemp.innerHTML = City.forecast.forecastday[dayIndex].hour[i].temp_c + "°C";
        hourIcon.src =
            "https:" + City.forecast.forecastday[dayIndex].hour[i].condition.icon;
        hour.appendChild(hourTime_1);
        hour.appendChild(hourTemp);
        hour.appendChild(hourIcon);
        hours.appendChild(hour);
    }
}
function Days(City) {
    var days = document.getElementById("DailyContainer");
    days.innerHTML = "";
    var i = 0;
    City.forecast.forecastday.forEach(function (day) {
        var dayContainer = document.createElement("div");
        dayContainer.classList.add("DailyInfo");
        var dayName = document.createElement("div");
        dayName.innerText = day.date;
        var dayTemp = document.createElement("div");
        dayTemp.innerText = day.day.avgtemp_c + "°C";
        dayTemp.classList.add("DailyTemp");
        var dayIcon = document.createElement("img");
        dayIcon.src = "https:" + day.day.condition.icon;
        dayIcon.classList.add("DailyIcon");
        var nightIcon = document.createElement("img");
        nightIcon.src = "https:" + day.day.condition.icon;
        nightIcon.classList.add("DailyIcon");
        var nightTemp = document.createElement("div");
        nightTemp.innerText = day.day.avgtemp_c + "°C";
        nightTemp.classList.add("DailyTemp");
        dayContainer.appendChild(dayName);
        dayContainer.appendChild(dayIcon);
        dayContainer.appendChild(dayTemp);
        dayContainer.appendChild(nightIcon);
        dayContainer.appendChild(nightTemp);
        console.log("it works");
        days.appendChild(dayContainer);
        i++;
    });
}
var searchbtn = document.getElementById("SearchButton");
searchbtn.addEventListener("click", function (e) {
    e.preventDefault();
    searchCity();
});
var searchbar = document.getElementById("SearchBar");
searchbar.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        searchCity();
    }
    else {
    }
});
function searchCity() {
    var input = document.getElementById("SearchBar");
    var City = input.value;
    console.log("this is the City");
    input.value = "";
    if (City === "") {
        return;
    }
    cachecities.forEach(function (ceties) {
        if (ceties.location.name.toLocaleLowerCase() === City.toLocaleLowerCase()) {
            console.log("found");
            mainInfo(ceties);
            BackgroundAndFont(ceties);
            return;
        }
    });
    API(City).then(function (data) {
        mainInfo(data);
        BackgroundAndFont(data);
    });
}
function searchCitypariodicly() {
    var input = document.getElementById("SearchBar");
    var City = input.value;
    console.log("this is the City");
    input.value = "";
    if (City === "") {
        return;
    }
    API(City).then(function (data) {
        mainInfo(data);
        BackgroundAndFont(data);
    });
}
function BackgroundAndFont(City) {
    var body = document.body;
    var weather = City.forecast.forecastday[0].day.condition.text;
    var Sunset = City.forecast.forecastday[0].astro.sunset;
    console.log(Sunset);
    var CurrentTime = City.location.localtime.split(" ")[1];
    if (weather === "Sunny" || weather === "Clear") {
        console.log("sunny");
        body.style.background =
            " linear-gradient(0deg, rgba(255,255,255,150) -30%, rgba(12,123,255,1) 100%)";
    }
    else if (weather.includes("rain") ||
        weather.includes("Overcast") ||
        weather.includes("Mist") ||
        weather.includes("Fog")) {
        console.log("rainy");
        body.style.background =
            "linear-gradient(0deg, rgba(119,136,153,1) 0%, rgba(192,192,192,1) 100%)";
    }
    else {
        console.log("night");
        //give me a dark blue gray gradient indacating night
        body.style.background =
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(12,123,255,1) 100%)";
        //change the font to white if the time is night i have it as a var called 
        var font = document.getElementById("font");
    }
}
