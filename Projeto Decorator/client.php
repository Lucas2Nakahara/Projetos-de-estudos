<?php

require "vendor/autoload.php";

use App\ImageProcessor\BasicImageProcessor;

$imagePath = "/tmp/file.jpg";

$imageProcessor = new BasicImageProcessor();
$imageProcessor->process($imagePath);