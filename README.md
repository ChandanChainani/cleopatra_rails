# README
The project was actually a [question](https://stackoverflow.com/questions/67585007/how-do-i-install-a-template-css-js-with-webpackers-in-rails-6/67715676#67715676) in stackoverflow which can checked [here](https://stackoverflow.com/a/67715676/14475852
)

## Steps:
1. cloned cleopatra theme repo locally
```
git clone https://github.com/moesaid/cleopatra.git moesaid_cleopatra
```
2. `rails new s_67585007 --no-ri --no-rdoc`
3. `rails g controller home index`
4. added root route in `config/routes.rb`
```
root 'home#index'
```
5. added tailwindcss package with requirements
```
yarn add tailwindcss@compat postcss@7 autoprefixer@9
```
6. `postcss.config.js`
```
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    // require('apexcharts'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
```
7.`cp moesaid_cleopatra/dist/js/script.js s_67585007/app/javascript/packs/cleopatra.js`

8. copied style, images and javascript file inside public folder
```
cp moesaid_cleopatra/dist/{css,img} s_67585007/public
```
9. `app/views/layouts/application.html.erb`
```
<!DOCTYPE html>
<html>
  <head>
    <title>Test67585007</title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.12.1/css/pro.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">  
    <%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= stylesheet_pack_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
  </head>

  <body>
    <%= yield %>
    <%= javascript_pack_tag 'cleopatra', 'data-turbolinks-track': 'reload' %>
  </body>
</html>
```
10. copied html from `moesaid_cleopatra/dist/index.html` pasted in `app/views/layouts/home/index.html.erb` and adjusted with `app/views/layouts/application.html.erb` changes can be checked [here](https://github.com/ChandanChainani/cleopatra_rails/blob/main/app/views/home/index.html.erb)
11. `app/javascript/packs/application.js`
```
import "../stylesheets/application.scss";

import ApexCharts from 'apexcharts';
window.ApexCharts = ApexCharts; // return apex chart 
```
12. `app/javascript/stylesheets/application.scss`
```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```
then start `rails server`  
Note: You may need to install some extra package has during compilation shows package missing `clipboard`
