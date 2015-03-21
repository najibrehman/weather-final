// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/
var spokane='99203';
$('#getZip').click(function(){
  var zip = $('#zip').val();

  console.log(zip);

  // 2. _simpleWeather()_ object
  $.simpleWeather({
    location: '99203', // change zip
    unit: 'c',
    
    // Get _weather_ object
    success: function(weather) {

      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      //get and store state
      var state= weather.region;

      var humidity= "Humidity: "+weather.humidity;

      var visibility="Visibility: "+weather.visibility;

      var sunrise = "Sunrise: "+weather.sunrise;

      var sunset = "Sunset: "+weather.sunset;

      var pressure = "Pressure: "+weather.pressure;

      var hiLow="H:"+weather.high+" "+"L:"+weather.low;

      var text=weather.text;

      var cityState=weather.city+","+weather.region;

      var code=weather.todayCode;

      var chill="Wind Chill: "+weather.wind.chill;

      var direction="Direction: "+weather.wind.direction;

      var speed=weather.wind.speed+"mph";
      
      console.log(state);
      
      var thumb = weather.thumbnail;
      
      var heatindex="Heat Index: "+ weather.heatindex;

      var wind=weather.wind;

      console.log(thumb);
      
      // Output to hooks in HTML
      $('.temp').text(temp+"°F");
      $('.city').text(cityState);
      $('.hiLow').text(hiLow);
      $('.text').text(text);
      $('.thumb img').attr('src', thumb);
      $('.sunrise').text(sunrise);
      $('.sunset').text(sunset);
      $('.pressure').text(pressure);
      $('.visibility').text(visibility);
      $('.humidity').text(humidity);

            
      if (weather.code>29 && weather.code<36) {
        
        $("#weather").css( "background-color", "#1fc122" );
        
      }

      else {
        $("#weather").css( "background-color", "#f43e3e" );
      }


      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });
});

var fathom = new Fathom('#presentation', {
  onActivateSlide: function() {
    console.log(this);

    $('prevSlide').click(function(){
  fathom.prevSlide();
});

$('nextSlide').click(function(){
  fathom.nextSlide();
});
  }
});



