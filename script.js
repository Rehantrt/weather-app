const apiKey = "YOUR_API_KEY_HERE";

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("weatherResult").classList.add("hidden");

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      alert("City not found!");
      document.getElementById("loading").classList.add("hidden");
      return;
    }

    document.getElementById("city").innerText =
      data.location.name + ", " + data.location.country;

    document.getElementById("temp").innerText =
      "Temperature: " + data.current.temp_c + "°C";

    document.getElementById("condition").innerText =
      data.current.condition.text;

    document.getElementById("icon").src =
      data.current.condition.icon;

    document.getElementById("loading").classList.add("hidden");
    document.getElementById("weatherResult").classList.remove("hidden");

  } catch (error) {
    console.error(error);
    alert("Error fetching data");
    document.getElementById("loading").classList.add("hidden");
  }
}