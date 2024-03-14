<?php


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <title>Home CTRL</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/global.css">
</head>
<body>
    <?php include_once("components/header.php") ?>
    <main>
        <div id="container">

            <div class="grid">
                <section class="sub_grid">
                    hi
                </section>
                
                <section class="sub_grid">
                    hi
                </section>
                
                <section class="sub_grid">
                    hi
                </section>

            </div>

            <div class="grid">
                <!-- Your HTML and PHP code -->

            <section class="sub_grid">
                <script>
                    const apiKey = '7f0f42e3edab492cbe194022240803';
                    const city = 'Amstelveen';
                    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;

                    // Use Fetch API to make the request
                    fetch(apiUrl)
                        .then(response => response.json())
                        .then(data => {
                            const today = data.forecast.forecastday[0];
                            console.log(`Temperature: ${today.day.avgtemp_c}°C`);
                        
                            // Update the DOM with the temperature
                            document.getElementById('temperature').textContent = `Temperature: ${today.day.avgtemp_c}°C`;
                        })
                        .catch(error => console.error('Error fetching weather data:', error));
                </script>
                <p id="temperature"></p>
            </section>

<!-- Continue with the rest of your HTML and PHP code -->

                
                <section class="sub_grid">
                    hi
                </section>
                
                <section class="sub_grid">
                    hi
                </section>

            </div>
        </div>
    </main>
    <?php include_once("components/footer.php") ?>
</body>
</html>