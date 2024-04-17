const city = 'Amsterdam', dayCount = 7;
const apiKey = '7f0f42e3edab492cbe194022240803';
const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${dayCount}&lang=nl&aqi=no&alerts=no`;
const days = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ];

!async function() {
    const forecast = document.getElementById('forecast');
    const response = await fetch(apiUrl);
    const parsed = await response.json();

    for (let i = 0; i < dayCount; i++) {
        const data = parsed?.forecast?.forecastday?.[i];
        if (!data) continue;

        const { date, day } = data;
        const dayName = days[new Date(date).getDay()];

        forecast.insertAdjacentHTML('beforeend', `
            <div class="forecast-card">
                <h3 class="forecast-day">${dayName}</h3>
                <div class="weather-status">
                    <img src="${day.condition.icon}" alt="weather icon">
                    <span class="weather-status-text">${day.condition.text}</span>
                </div>
                <p class="forecast-day-temp">${day.avgtemp_c} &deg;C</p>
            </div>
        `);
    }
}();