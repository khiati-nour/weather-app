(function() {
// my API KEY
var apiKey = "4950ba99cd0faf25fafb6f37967c0ead"

  // the event listener when we click the key enter in the input box with input id
  document.getElementById('input').addEventListener('keypress', function (e) {
    if  (e.key === 'Enter')
    {
      var city = document.getElementById('input').value
        // fetch the url with the city and my API KEY
          fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+apiKey)
            .then(weather => weather.json())
            .then(data => console.log(data))
            .catch(err => {
                console.log(err);})


    }

});
})();