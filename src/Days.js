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
export default Days;
