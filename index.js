function addApi() {
  let apiKey = "79f10te4a3db72b2821oed920f46defa";
  let apiUrl ="https://api.shecodes.io/weather/v1/current?query={query}&key={key}
"
}

function searchBox(event) {
   event.preventDefault();

   let searchElement = document.querySelector(".input-box");
   let myHeading = document.querySelector("#myHeading");

  myHeading.innerHTML = searchElement.value;
}
