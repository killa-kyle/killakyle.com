<?php
// File Name: proxy.php

$api_key = '98e3e813cba9b668c2c8edab71d699af';

$API_ENDPOINT = 'https://api.forecast.io/forecast/';
$url = $API_ENDPOINT . $api_key . '/';

if(!isset($_GET['url'])) die();
$url = $url . urldecode($_GET['url']);
$url = file_get_contents($url);

print_r($url);
