
function API(City: string) {
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=3fb10e08476c424d8ea115059232511&q=${(City)}&days=7`,   {
       method: "GET",
       mode: "cors"})
   .then((response) => response.json())
   .then((data)=>data);
}

export default API;
