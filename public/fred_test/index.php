<?php


?>



<!DOCTYPE html>
<html lang="en">

<head>
    <title>Home CTRL</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/global.css">
    <script src="script/script.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
</head>

<body>
    <?php include_once("../components/header.php") ?>
    <main>
        <div id="container">

            <div class="grid">
                <section class="sub_grid">
                    <div class="container">
                        <img class="circle" src="clock2.png" alt="">
                    </div>
                </section>

                <section class="sub_grid">

                    <div class="image-container">
                        <img id="lightbulb" src="../static/lightbulb_off.jpg" alt="First Image" onclick="swapImage()">
                    </div>
                    <div>
                        <input type="text" id="time">
                        <button onclick="setTimeout(swapImage, time.value*1000);"></button>
                    </div>
                </section>

                <section class="sub_grid">
                    <div>
                        <canvas id="coursesDoughnutChart" width="700" height="550"></canvas>
                    </div>
                </section>

            </div>

            <div class="grid">

                <section class="sub_grid">
                    <script>
                        const apiKey = '7f0f42e3edab492cbe194022240803';
                        const city = 'Amstelveen';
                        const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;

                        fetch(apiUrl)
                            .then(response => response.json())
                            .then(data => {
                                const today = data.forecast.forecastday[0];
                                console.log(`Temperature: ${today.day.avgtemp_c}°C`);

                                document.getElementById('temperature').textContent = `Temperature: ${today.day.avgtemp_c}°C`;
                            })
                            .catch(error => console.error('Error fetching weather data:', error));
                    </script>
                    <p id="temperature"></p>
                </section>

                <section class="sub_grid">
                    hi
                </section>

                <section class="sub_grid">
                    hi
                </section>

            </div>
        </div>
    </main>
    <?php include_once("../components/footer.php") ?>
</body>

</html>