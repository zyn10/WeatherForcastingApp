let content = document.getElementById('content');
content.style.visibility = 'hidden';

function getInput() {
  var cityInput = document.getElementById("city").value;
  console.log(cityInput);

  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=2d1b74f5ad0d95acfc6cf9bf6bdd5687&units=metric",
    type: "get",
    success: function(data) {
      $("#city_name").html(data.name);
      $("#country_name").html(data.sys.country);
      $("#main").html(data.weather[0].main);
      $("#temp").html(data.main.temp + " C");
      content.style.visibility = 'visible';
    },
    error: function(error) {
      content.style.visibility = 'hidden';
      console.log('No Data Found');
    }
  });
}
