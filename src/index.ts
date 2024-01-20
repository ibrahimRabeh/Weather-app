
import API from "./API";
import "./style.scss";
async function fetchCity() {
  let City = await API("texas");
  mainInfo(City);
  Days(City);
  BackgroundAndFont(City);

}
localStorage.clear();
let cachecities: any = [];
if (localStorage.getItem("cities")) {
  cachecities = JSON.parse(localStorage.getItem("cities"));
  
}

fetchCity();

function mainInfo(City: any) {
  console.log(City);
  const CityNameS: string = City.location.name;

  const CityName = document.getElementById("City") as HTMLHeadingElement;
  CityName.innerHTML = CityNameS;
  const Date = document.getElementById("Time") as HTMLHeadingElement;
  Date.innerHTML = City.location.localtime.split(" ")[1] + "|";
  const Temp = document.getElementById("Temp") as HTMLHeadingElement;
  Temp.innerHTML = City.forecast.forecastday[0].day.avgtemp_c + "°C";
  const svg = document.getElementById("Icon") as HTMLImageElement;
  svg.src = "https:" + City.forecast.forecastday[0].day.condition.icon;
  const Humidity = document.getElementById("Humidity") as HTMLHeadingElement;
  Humidity.innerHTML = "H: "+ City.current.humidity + "%";
  const ChanceOfRain = document.getElementById(
    "ChanceOfRain"
  ) as HTMLHeadingElement;
  ChanceOfRain.innerHTML =
    "R:" + City.forecast.forecastday[0].day.daily_chance_of_rain + "%";
  if (cachecities.length > 5) {
    console.log("more than 5");
    cachecities.pop();
  }

  if (
    !cachecities.some(
      (cachedCity: any) => cachedCity.location.name === CityName
    )
  ) {
    cachecities.push(City);
    localStorage.setItem("cities", JSON.stringify(cachecities));
  }

  console.log(cachecities);
  hours(City);
}
function hours(City: any) {
  const hours = document.getElementById("HourlyContainer") as HTMLDivElement;
  hours.innerHTML = "";
  let currentTime = City.current.last_updated.split(" ")[1].split(":")[0];
  let hourTime = City.forecast.forecastday[0].hour[0].time
    .split(" ")[1]
    .split(":")[0];
  let i = 0;
  while (currentTime !== hourTime && i < 24) {
    hourTime = City.forecast.forecastday[0].hour[++i].time
      .split(" ")[1]
      .split(":")[0];
   
  }

  while (i < 24) {
    const hour = document.createElement("div");
    hour.classList.add("HourlyInfo");
    const hourTime = document.createElement("h3");
    hourTime.classList.add("HourlyTime");
    const hourTemp = document.createElement("h3");
    hourTemp.classList.add("HourlyTemp");
    const hourIcon = document.createElement("img");
    hourIcon.classList.add("HourlyIcon");
    const time = parseInt(
      City.forecast.forecastday[0].hour[i].time.split(" ")[1].split(":")[0]
    );
    if (time ===parseInt(City.current.last_updated.split(" ")[1].split(":")[0])) {
      hourTime.innerHTML = "Now";
    }
    else{

    const twelveHourTime = time % 12 || 12;
     if (time === 0) {
      hourTime.innerHTML = "12:00 AM";
    }
    else if (time > 12) {
      hourTime.innerHTML = twelveHourTime + ":00 PM";
    } else{
    hourTime.innerHTML = twelveHourTime + ":00 AM";
    }
  }
    hourTemp.innerHTML = City.forecast.forecastday[0].hour[i].temp_c + "°C";
    hourIcon.src =
      "https:" + City.forecast.forecastday[0].hour[i].condition.icon;
    hour.appendChild(hourTime);
    hour.appendChild(hourTemp);
    hour.appendChild(hourIcon);
    hours.appendChild(hour); 
    i++;
  }
}
function Days(City: any) {
  const days = document.getElementById("DailyContainer") as HTMLDivElement;
  days.innerHTML = "";
  let i = 0;
  City.forecast.forecastday.forEach((day: any) => {
    const dayContainer = document.createElement("div");
    dayContainer.classList.add("DailyInfo");
    const dayName = document.createElement("div");
    dayName.innerText = day.date;
    const dayTemp = document.createElement("div");
    dayTemp.innerText = day.day.avgtemp_c + "°C";
    dayTemp.classList.add("DailyTemp");
    const dayIcon = document.createElement("img");
    dayIcon.src = "https:" + day.day.condition.icon;
    dayIcon.classList.add("DailyIcon");
    const nightIcon = document.createElement("img");
    nightIcon.src = "https:" + day.day.condition.icon;
    nightIcon.classList.add("DailyIcon");
    const nightTemp = document.createElement("div");
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
const searchbtn = document.getElementById("SearchButton") as HTMLFormElement;
searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchCity();
});
const searchbar = document.getElementById("SearchBar") as HTMLFormElement;
searchbar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchCity();
  } else {
  }
});
function searchCity() {
  const input = document.getElementById("SearchBar") as HTMLInputElement;
  const City = input.value;
  console.log("this is the City");
  input.value = "";
  if (City === "") {
    return;
  }
  cachecities.forEach((ceties: any) => {
    if (ceties.location.name.toLocaleLowerCase() === City.toLocaleLowerCase()) {
      console.log("found");
      mainInfo(ceties);
      BackgroundAndFont(ceties);
      return;
    }
  });
  API(City).then((data:any) => {
    mainInfo(data);
    BackgroundAndFont(data);
  });
}
function searchCitypariodicly() {
  const input = document.getElementById("SearchBar") as HTMLInputElement;
  const City = input.value;
  console.log("this is the City");
  input.value = "";
  if (City === "") {
    return;
  }
  API(City).then((data:any) => {
    mainInfo(data);
    BackgroundAndFont(data);
  });
}
function BackgroundAndFont(City: any) {
  const body = document.body as HTMLBodyElement;
  const weather = City.forecast.forecastday[0].day.condition.text;
  const Sunset = City.forecast.forecastday[0].astro.sunset;
  console.log(Sunset);
  const CurrentTime = City.location.localtime.split(" ")[1];
  if (weather === "Sunny" || weather === "Clear") {
    console.log("sunny");
    body.style.background =
      " linear-gradient(0deg, rgba(255,255,255,150) -30%, rgba(12,123,255,1) 100%)";
  } else if (
    weather.includes("rain") ||
    weather.includes("Overcast") ||
    weather.includes("Mist") ||
    weather.includes("Fog")
  ) {
    console.log("rainy");
    body.style.background =
      "linear-gradient(0deg, rgba(119,136,153,1) 0%, rgba(192,192,192,1) 100%)";
  } else {
    console.log("night");
    //give me a dark blue gray gradient indacating night
    body.style.background =
      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(12,123,255,1) 100%)";
      //change the font to white if the time is night i have it as a var called 
      const font = document.getElementById("font") as HTMLHeadingElement;


  }
}
