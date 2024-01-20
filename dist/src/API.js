function API(City) {
    return fetch("https://api.weatherapi.com/v1/forecast.json?key=3fb10e08476c424d8ea115059232511&q=".concat((City), "&days=7"), {
        method: "GET",
        mode: "cors"
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { return data; });
}
export default API;
