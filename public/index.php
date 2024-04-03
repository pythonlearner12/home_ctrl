<?php
$city = 'Amsterdam';
$apiKey = '7f0f42e3edab492cbe194022240803';
$apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=$apiKey&q=$city&days=1";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Home CTRL</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A modern, high quality home control system">
    <meta name="author" content="HomeCTRL">
    <link rel="stylesheet" href="styles/global.css">
</head>
<body>
    <?php include_once("components/header.php") ?>
    <main>
        <section>hi</section>
        <section>hi</section>
        <section>hi</section>
        <section>
            <b><?php
                $response = @file_get_contents($apiUrl);
                if ($response) {
                    $parsed = json_decode($response, true);
                    if (isset($parsed['forecast']['forecastday'][0]['day']['avgtemp_c'])) {
                        echo 'Temperature: ' . $parsed['forecast']['forecastday'][0]['day']['avgtemp_c'] . '°C';
                    } else {
                        echo 'Temperature data not available.';
                    }
                } else {
                    echo 'Failed to fetch data from the API.';
                }
            ?></b>
        </section>
        <section>hi</section>
        <section>hi</section>
    </main>
    <?php include_once("components/footer.php") ?>
</body>
</html>