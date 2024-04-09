const weeklyForecast = document.getElementById('weekly-forecast');

const city = 'Amsterdam', dayCount = 7;
const apiKey = '7f0f42e3edab492cbe194022240803';
const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${dayCount}&lang=nl`;
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

!async function() {
    const response = await fetch(apiUrl);
    const parsed = await response.json();

    for (let i = 0; i < dayCount; i++) {
        const data = parsed?.forecast?.forecastday?.[i];
        if (!data) continue;

        const { date, day } = data;
        const dayName = days[new Date(date).getDay()];

        weeklyForecast.insertAdjacentHTML("beforeend", `
            <div class="forecast-card">
                <span>${dayName}: ${ day.avgtemp_c } .C</span>
            </div>
        `);
    }
}();