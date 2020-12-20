function getColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
    );
  }
  
  function setBackground() {
    var bgColor = getColor();
    document.body.style.background = bgColor;
  }

  document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      setBackground();
    }
  };

  function getWeather() {
      let temperature = document.getElementById("temperature");
      let description = document.getElementById("description");
      let location = document.getElementById("location");
      let api = "https://api.openweathermap.org/data/2.5/weather";
      let apiKey = "d7b693f0b8369328c5cb719d435a8cee";
  }

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    console.log(position);
   }
   
   function error() {
    console.log("error");
   }

   getWeather();