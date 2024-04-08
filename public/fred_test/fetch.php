<?php

$jsonText = file_get_contents("https://pokeapi.co/api/v2/pokemon/ditto");
$json = json_decode($jsonText);

//echo $json;
//print($jsonText);
print_r($json->abilities[0]->ability->name);
