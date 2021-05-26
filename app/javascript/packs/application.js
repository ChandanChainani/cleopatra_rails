// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// const images = require.context('../img', true)
// const imagePath = (name) => images(name, true)

console.log('running');
import "../stylesheets/application.scss";

import ApexCharts from 'apexcharts';
window.ApexCharts = ApexCharts; // return apex chart 

// import "apexcharts";
// window.ApexCharts = require('apexcharts/dist/apexcharts.min.js');
// require('apexcharts/dist/apexcharts.min');
// import ApexCharts from 'apexcharts/dist/apexcharts.min';
// console.log(window);
// console.log(document);
// document.ApexCharts = ApexCharts; // return apex chart 
