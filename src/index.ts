
import API from "./API";
import "./style.scss";
let city = "London";
localStorage.clear();
let cachecities: any = [];
if (localStorage.getItem("cities")) {
  cachecities = JSON.parse(localStorage.getItem("cities"));
  city = cachecities[cachecities.length - 1].location.name;
  
}
async function fetchCity() {
  let City = await API(city);
  mainInfo(City);
  updateCache(City.location.name, City);
  Days(City);
  BackgroundAndFont(City);

}

fetchCity();

function mainInfo(City: any) {
  console.log(City);
  const CityNameS: string = City.location.name;
  let currentHour = parseInt(City.current.last_updated.split(" ")[1].split(":")[0]);

  const CityName = document.getElementById("City") as HTMLHeadingElement;
  CityName.innerHTML = CityNameS;
  const Date = document.getElementById("Time") as HTMLHeadingElement;
  Date.innerHTML = City.location.localtime.split(" ")[1] + "|";
  const Temp = document.getElementById("Temp") as HTMLHeadingElement;
  Temp.innerHTML = City.forecast.forecastday[0].day.avgtemp_c + "°C";
  const svg = document.getElementById("Icon") as HTMLImageElement;
  svg.src = "https:" + City.forecast.forecastday[0].hour[(currentHour+1)%24].condition.icon;
  const Humidity = document.getElementById("Humidity") as HTMLHeadingElement;
  Humidity.innerHTML = "H: "+ City.current.humidity + "%";
  const ChanceOfRain = document.getElementById(
    "ChanceOfRain"
  ) as HTMLHeadingElement;
  ChanceOfRain.innerHTML =
    "R:" + City.forecast.forecastday[0].day.daily_chance_of_rain + "%";

  hours(City);
}
function updateCache(CityName: any, City: any) {
  if (cachecities.length >= 5) {
    console.log("more than 5");
    cachecities.shift();
  }

  if (
    !cachecities.some(
      (cachedCity: any) => cachedCity.location.name === CityName
    )
  )
  {
    cachecities.push(City);
    localStorage.setItem("cities", JSON.stringify(cachecities));
  }

  console.log(cachecities);
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
  let dayIndex = 0;
  let NewDayHoursIndex = 0;


  while (NewDayHoursIndex < 23) {
    if (i === 23) {
      i = 0;
      dayIndex++;
    }
    NewDayHoursIndex++;

    const hour = document.createElement("div");
    hour.classList.add("HourlyInfo");
    const hourTime = document.createElement("h3");
    hourTime.classList.add("HourlyTime");
    const hourTemp = document.createElement("h3");
    hourTemp.classList.add("HourlyTemp");
    const hourIcon = document.createElement("img");
    hourIcon.classList.add("HourlyIcon");
    const time = parseInt(
      City.forecast.forecastday[dayIndex].hour[i++].time.split(" ")[1].split(":")[0]
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
    hourTemp.innerHTML = City.forecast.forecastday[dayIndex].hour[i].temp_c + "°C";
    hourIcon.src =
      "https:" + City.forecast.forecastday[dayIndex].hour[i].condition.icon;
    hour.appendChild(hourTime);
    hour.appendChild(hourTemp);
    hour.appendChild(hourIcon);
    hours.appendChild(hour); 
    
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
    dayName.innerText = getDayName(day.date);
    const dayTemp = document.createElement("div");
    dayTemp.innerText = day.day.avgtemp_c + "°C";
    dayTemp.classList.add("DailyTemp");
    const dayIconContainer = document.createElement("div");
    dayIconContainer.classList.add("DailyIconContainer");
    const dayIcon = document.createElement("img");
    dayIcon.src = "https:" + day.day.condition.icon;
    dayIcon.classList.add("DailyIcon");
    const nightIcon = document.createElement("img");
    nightIcon.src = "https:" + day.day.condition.icon;
    nightIcon.classList.add("DailyIcon");
    dayContainer.appendChild(dayName);
    dayContainer.appendChild(dayTemp);
    dayIconContainer.appendChild(dayIcon);
    dayIconContainer.appendChild(nightIcon);
    dayContainer.appendChild(dayIconContainer);
    
    
    console.log("it works");
    days.appendChild(dayContainer);
    i++;
    
  });   
}
function getDayName(dateString: string) {
  const date = new Date(dateString);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
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
    updateCache(data.location.name, data);
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
  let currentHour = parseInt(City.current.last_updated.split(" ")[1].split(":")[0]);
  let weatherCondition = City.forecast.forecastday[0].hour[currentHour].condition.text;
  let weatherIcon = City.forecast.forecastday[0].hour[currentHour].condition.icon;
  let font = "rgb(255,255,255)";
  let mainColor = "rgb(20,20,255)";
  let secondaryColor = "rgb(200,200,200)";

  if (weatherIcon.includes("day")) {
    font = "rgb(10,10,10)";
    mainColor = "rgb(100,100,255)";
  }

  if (weatherCondition === "Clear") {
     secondaryColor = "rgb(255,255,255)";
     if (weatherIcon.includes("night")) 
       secondaryColor = "rgb(0,0,0)";

  }
  body.style.background = `linear-gradient(${mainColor} 0%, ${secondaryColor} 100%)`;
  body.style.background = `repeating-linear-gradient(
    45deg,
    
    ${mainColor} 2px,
    
    ${secondaryColor} 4px
   
  )`;
    body.style.color = font;





  
  

  
}
