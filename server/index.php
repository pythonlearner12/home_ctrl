<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$data = file_get_contents('data.json');
$input = file_get_contents('php://input');

if (strlen($input) > 0) {
    $data = json_decode($data, true);
    foreach (json_decode($input, true) as $key => $value) {
        $data[$key] = $value;
    }
    $data = json_encode($data);
    file_put_contents('data.json', $data);
}

echo $data;
