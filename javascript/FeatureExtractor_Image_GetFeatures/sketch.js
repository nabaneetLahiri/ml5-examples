// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Get Features as an Array of Numbers using Feature Extraction with MobileNet.
=== */

const img = document.getElementById('img');
const resContainer = document.getElementById('result');

// Create a featureExtractor based MobileNet model
const featureExtractor = ml5.featureExtractor('MobileNet', modelLoaded);

// A function to be called when the model has been loaded
function modelLoaded() {
  // Get features of the image
  const features = featureExtractor.getFeatures(img);
  // Show the results
  resContainer.innerHTML = features;
}