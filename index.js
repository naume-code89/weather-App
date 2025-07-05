function refreshWeather(response) {
 let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
console.log(response.data)
temperatureElement.innerHTML = Math.round(temperature);

let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = response.data.condition.description;
console.log(response.data.condition.description);

let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
console.log(response.data.temperature.humidity);

let windSpeedElement = document.querySelector("#wind-speed");  
windSpeedElement.innerHTML = `${response.data.wind.speed}Km/h`;
console.log(response.data.wind.speed);

let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);
timeElement.innerHTML = formatDate(date);

let iconElement = document.querySelector("#icon");
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="emoji" />`;
}

function formatDate(date) {
 
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",]
      
 let day = days[date.getDay()];
if(minutes <10) {
  minutes = `0$(minutes)`;
}

 return `${day} ${hours}: ${minutes}`;

 
  
};

function findCity(city) {
  let apiKey = "79f10te4a3db72b2821oed920f46defa";
  let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
  console.log(apiUrl);
}

function searchBox(event) {
   event.preventDefault();

   let searchElement = document.querySelector("#input-box");
   let myHeading = document.querySelector("#myHeading");

  myHeading.innerHTML = searchElement.value;
  findCity(searchElement.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",searchBox);
