const city = 'Amsterdam', dayCount = 3;
const apiKey = '7f0f42e3edab492cbe194022240803';
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${dayCount}&lang=nl&aqi=no&alerts=no`;
const days = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ];
const forecastElement = document.getElementById('forecast');

!async function fetchForecast() {
    const response = await fetch(apiUrl);
    const parsed = await response.json();

    const forecast = parsed?.forecast?.forecastday;
    if (!forecast) {
        setTimeout(fetchForecast, 1000);
        return;
    }

    for (const { date, day } of forecast) {
        forecastElement.insertAdjacentHTML('beforeend', `
            <div class="forecast-card">
                <h3 class="forecast-day">${days[new Date(date).getDay()]}</h3>
                <div class="weather-status">
                    <img src="${day.condition.icon}" alt="weather icons">
                    <span class="weather-status-text">${day.condition.text}</span>
                </div>
                <p class="forecast-day-temp">${day.avgtemp_c} &deg;C</p>
            </div>
        `);
    }
}();