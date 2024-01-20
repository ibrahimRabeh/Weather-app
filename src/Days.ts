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
export default Days;