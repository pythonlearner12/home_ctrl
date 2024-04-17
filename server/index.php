<?php

$data = file_get_contents('data.json');
$input = file_get_contents('php://input');

if (!empty($input)) {
    $data = json_decode($data, true);
    foreach (json_decode($input, true) as $key => $value) {
        $data[$key] = $value;
    }
    $data = json_encode($data);
    file_put_contents('data.json', $data);
}

header('Content-Type: application/json');
echo $data;