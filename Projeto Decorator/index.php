<?php

namespace App\ImageProcessor;

interface ImageProcessor {
    public function process (string $imagePath): string;
}