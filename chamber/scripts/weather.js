const apiKey = "0c8f364cdae8e4566c642af31f69b9ea";
const lat = 5.52;
const lon = 5.75;
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(weatherUrl);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
        console.error(data.message);
        return;
    }
    document.querySelector("#temperature").textContent = `${Math.round(data.list[0].main.temp)}°C`;
    document.querySelector("#description").textContent = data.list[0].weather[0].description;
    
    const forecast = document.querySelector("#forecast");

    forecast.innerHTML = "";

    for (let i = 8; i <= 24; i += 8) {
        const li = document.createElement("li");

        const date = new Date(data.list[i].dt_txt);

        const day = date.toLocaleDateString("en-US", {
            weekday: "long"
        });

        li.textContent = `${day}: ${Math.round(data.list[i].main.temp)}°C`;

        forecast.appendChild(li);
    }
}
getWeather();

