const city = 'Amsterdam', dayCount = 7;
const apiKey = '7f0f42e3edab492cbe194022240803';
const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${dayCount}&lang=nl`;

!async function() {
    const response = await fetch(apiUrl);
    const parsed = await response.json();

    for (let i = 0; i < dayCount; i++) {
        const day = parsed?.forecast?.forecastday?.[i]?.day;
        if (!day) continue;

        console.log(day);
    }
}();