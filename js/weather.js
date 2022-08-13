const API_KEY = `b9447e5dc5fd60d7cc1665751f2d1a50`;

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.getElementById('current-weather');
      const city = document.getElementById('city');
      const icon = document.querySelector('#weather img');
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

      city.textContent = data.name;
      weather.textContent = `${data.weather[0].main} / ${data.main.temp}°`;
      icon.setAttribute('src', iconUrl);
    });
};

const onGeoError = () => {
  alert(`Can't find you. No weather for you.`);
};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
