const { environment } = require('@rails/webpacker')
const webpack = require('webpack');

// console.log(environment);
// environment.config.merge({
//   target: 'node'
//   // target: 'es5'
// })

// environment.plugins.prepend(
//   "Provide",
//   new webpack.ProvidePlugin({
//     // $: "jquery",
//     // jQuery: "jquery",
//     // Popper: ["popper.js", "default"] // for Bootstrap 4
//     apexcharts: "apexcharts"
//   })
// );

module.exports = environment
