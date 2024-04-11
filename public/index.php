<!DOCTYPE html>
<html lang="en">
<head>
    <title>Home CTRL</title>
    <!-- Metadata -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A modern, high quality home control system">
    <meta name="author" content="HomeCTRL">
    <!-- Links -->
    <link rel="stylesheet" href="css/global.css">
    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="js/weekly_forecast.js" defer></script>
    <script src="js/solar_panel_graph.js" defer></script>
    <script src="js/thermometer.js" defer></script>
</head>
<body>
    <?php include_once("components/header.php") ?>
    <main>
        <section>hi</section>
        <section>hi</section>
        <section>hi</section>
        <section id="weekly-forecast"></section>
        <section><canvas id="solar-panel-graph"></canvas></section>
        <section><canvas id="thermometer"></canvas></section>
    </main>
    <?php include_once("components/footer.php") ?>
</body>
</html>