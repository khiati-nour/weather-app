
(function() {

// my API KEY

var apiKeyLocation = "3fb726164f694e7d96c34f856af327c4";
var city2


// geolocalisation function
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);



        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat, long)
        fetch('https://api.opencagedata.com/geocode/v1/json?q='+lat+","+long+'&key='+apiKeyLocation )
            .then(location => location.json())
            .then(data => {
                city2 = data.results[0].components.city
                console.log(city2)
                ToFetch(city2)
                FetchPhoto(city2);
            } )
            .catch(err => {
                console.log(err);})

    }
    getLocation();


  // the event listener when we click the key enter in the input box with input id
  document.getElementById('input').addEventListener('keypress', function (e) {
    if  (e.key === 'Enter')
    {
      var city = document.getElementById('input').value
        // fetch the url with the city and my API KEY
          ToFetch(city)
        FetchPhoto(city);


    }

});
    function drawWeather( d ) {

//card1
        document.getElementById('weather1').innerHTML = d.data[0].weather.description
        let now = new Date();
        document.getElementById('date1').innerHTML =setDate1(now)
        document.getElementById('location1').innerHTML = d.city_name + ','+ d.country_code
        var tempMain1 = Math.round(d.data[0].temp) ;
        document.getElementById('temp1').innerHTML = tempMain1 + "°C";
        var temp1 =[d.list[0].main.temp_min,d.list[1].main.temp_min,d.list[2].main.temp_min,d.list[3].main.temp_min,d.list[4].main.temp_min,
            d.list[5].main.temp_min,d.list[6].main.temp_min,d.list[7].main.temp_min,d.list[0].main.temp_max,d.list[1].main.temp_max,
            d.list[2].main.temp_max,d.list[3].main.temp_max,d.list[4].main.temp_max,d.list[5].main.temp_max,d.list[6].main.temp_max,
            d.list[7].main.temp_max]
        let tempMax1 = Math.round(parseFloat(Math.max(...temp1))-273.15);
        let tempMin1 = Math.round(parseFloat(Math.min(...temp1))-273.15);

        document.getElementById('min-max-weather1').innerHTML = tempMin1+ "°C" +"/"+ tempMax1+ "°C"
//card2
       document.getElementById('weather2').innerHTML = d.list[8].weather[0].main;
        let now2 = new Date(d.list[8].dt_txt);
        console.log(now2)

        document.getElementById('date2').innerHTML =setDate1(now2)
        document.getElementById('location2').innerHTML = d.city.name + ','+ d.city.country

            var tempMain2=  Math.round(parseFloat(d.list[8].main.temp)-273.15)
        document.getElementById('temp2').innerHTML = tempMain2 + "°C";
        var temp2=[d.list[8].main.temp_min,d.list[9].main.temp_min,d.list[10].main.temp_min,d.list[11].main.temp_min,d.list[12].main.temp_min,
            d.list[13].main.temp_min,d.list[14].main.temp_min,d.list[15].main.temp_min,d.list[8].main.temp_max,
            d.list[9].main.temp_max,d.list[10].main.temp_max,d.list[11].main.temp_max,d.list[12].main.temp_max,d.list[13].main.temp_max,
            d.list[14].main.temp_max,d.list[15].main.temp_max]
        let tempMax2 = Math.round(parseFloat(Math.max(...temp2))-273.15);
        let tempMin2 = Math.round(parseFloat(Math.min(...temp2))-273.15);

        document.getElementById('min-max-weather2').innerHTML = tempMin2+ "°C" +"/"+ tempMax2+ "°C"
// day 3
        document.getElementById('weather3').innerHTML = d.list[16].weather[0].main;
        let now3 = new Date(d.list[16].dt_txt);
        document.getElementById('date3').innerHTML =setDate1(now3)
        document.getElementById('location3').innerHTML = d.city.name + ','+ d.city.country
        var tempMain3 = Math.round(parseFloat(d.list[16].main.temp)-273.15)
        document.getElementById('temp3').innerHTML = tempMain3 + "°C"
        var temp3=[d.list[16].main.temp_min,d.list[17].main.temp_min,d.list[18].main.temp_min,d.list[19].main.temp_min,d.list[20].main.temp_min,
            d.list[21].main.temp_min,d.list[22].main.temp_min,d.list[23].main.temp_min,d.list[16].main.temp_max,d.list[17].main.temp_max,
            d.list[18].main.temp_max,d.list[19].main.temp_max,d.list[20].main.temp_max,d.list[21].main.temp_max,d.list[22].main.temp_max,
            d.list[23].main.temp_max]
        let tempMax3 = Math.round(parseFloat(Math.max(...temp3))-273.15);
        let tempMin3 = Math.round(parseFloat(Math.min(...temp3))-273.15);


        document.getElementById('min-max-weather3').innerHTML = tempMin3+ "°C" +"/"+ tempMax3+ "°C"
//day4
        document.getElementById('weather4').innerHTML = d.list[24].weather[0].main;
        let now4 = new Date(d.list[24].dt_txt);
        document.getElementById('date4').innerHTML =setDate1(now4)
        document.getElementById('location4').innerHTML = d.city.name + ','+ d.city.country
        var tempMain4 = Math.round(parseFloat(d.list[24].main.temp)-273.15)
        document.getElementById('temp4').innerHTML = tempMain4 + "°C"
        var temp4=[d.list[24].main.temp_min,d.list[25].main.temp_min,d.list[26].main.temp_min,d.list[27].main.temp_min,d.list[28].main.temp_min,
            d.list[29].main.temp_min,d.list[30].main.temp_min,d.list[31].main.temp_min,d.list[24].main.temp_max,d.list[25].main.temp_max,
            d.list[26].main.temp_max,d.list[27].main.temp_max,d.list[28].main.temp_max,d.list[29].main.temp_max,d.list[30].main.temp_max,
            d.list[31].main.temp_max]
        let tempMax4 = Math.round(parseFloat(Math.max(...temp4))-273.15);
        let tempMin4 = Math.round(parseFloat(Math.min(...temp4))-273.15);


        document.getElementById('min-max-weather4').innerHTML = tempMin4+ "°C" +"/"+ tempMax4+ "°C"
//day5
        document.getElementById('weather5').innerHTML = d.list[32].weather[0].main;
        let now5 = new Date(d.list[32].dt_txt);
        document.getElementById('date5').innerHTML =setDate1(now5)
        document.getElementById('location5').innerHTML = d.city.name + ','+ d.city.country
        var tempMain5 =  Math.round(parseFloat(d.list[32].main.temp)-273.15) ;
        document.getElementById('temp5').innerHTML =  tempMain5 + "°C";
        var temp5=[d.list[32].main.temp_min,d.list[33].main.temp_min,d.list[34].main.temp_min,d.list[35].main.temp_min,d.list[36].main.temp_min,
            d.list[37].main.temp_min,d.list[38].main.temp_min,d.list[39].main.temp_min,d.list[32].main.temp_max,d.list[33].main.temp_max,
            d.list[34].main.temp_max,d.list[35].main.temp_max,d.list[36].main.temp_max,d.list[37].main.temp_max,d.list[38].main.temp_max,
            d.list[39].main.temp_max]
        let tempMax5 = Math.round(parseFloat(Math.max(...temp5))-273.15);
        let tempMin5 = Math.round(parseFloat(Math.min(...temp5))-273.15);


        document.getElementById('min-max-weather5').innerHTML = tempMin5+ "°C" +"/"+ tempMax5+ "°C"
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [setDate1(now), setDate1(now2), setDate1(now3), setDate1(now4), setDate1(now5)],
                datasets: [{
                    label: 'Weather Degrees Changes',
                    data: [tempMain1, tempMain2, tempMain3, tempMain4, tempMain5],
                    backgroundColor: [

                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });


    }
    function setDate1(a){
        let months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

        let day = days[a.getDay()];
        let date = a.getDate();
        let month = months[a.getMonth()];
        let year = a.getFullYear();
        return day + " " + date + " " + month + " " + year
    }
    function ToFetch(city){
        var apiKey = "4950ba99cd0faf25fafb6f37967c0ead";
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+apiKey)
            .then(weather => weather.json())
            .then(data => {
                drawWeather(data)
                console.log(data)
            } )
            .catch(err => {
                console.log(err);})

    }

    function FetchPhoto(y){

        fetch('https://api.unsplash.com/search/photos?query='+y+'&client_id=qsDo-ZdWufGK_Li3mSI8baq2HeuHYjRFBrVdz1asI1k')
            .then(cities => cities.json())
            .then(data => {

                console.log(data)
                let backPic = [data.results[0].urls.regular,data.results[1].urls.regular,data.results[2].urls.regular,
                    data.results[3].urls.regular,data.results[4].urls.regular,data.results[5].urls.regular,
                    data.results[6].urls.regular,data.results[7].urls.regular,data.results[8].urls.regular,
                    data.results[9].urls.regular]
                var RanPic =  backPic[Math.floor(Math.random() * backPic.length)];

                document.body.style.backgroundImage = "url"+"("+RanPic+")";
            } )
            .catch(err => {
                console.log(err);})
    }
    function test(){
        fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=tiaret&key=819b2bea9492431ea2ff177b25408ce8')
            .then(cities => cities.json())
            .then(data => {

                console.log(data)

            } )
            .catch(err => {
                console.log(err);})

    }
    test();



})();