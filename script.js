
(function() {

// my API KEY

var apiKeyLocation = "3fb726164f694e7d96c34f856af327c4";


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
        document.getElementById('location1').innerHTML = d.city_name + ','+" " + d.country_code
        var tempMain1 = Math.round(d.data[0].temp) ;
        document.getElementById('temp1').innerHTML = tempMain1 + "°C";
        document.getElementById("img1").src = "https://www.weatherbit.io/static/img/icons/"+d.data[0].weather.icon+".png";
        let tempMax1 = Math.round(d.data[0].max_temp);
        let tempMin1 = Math.round(d.data[0].min_temp);

        document.getElementById('min-max-weather1').innerHTML = tempMin1+ "°C" +"/"+ tempMax1+ "°C"
//card2
       document.getElementById('weather2').innerHTML = d.data[1].weather.description
        let now2 = new Date(d.data[1].valid_date);


        document.getElementById('date2').innerHTML =setDate1(now2)
        document.getElementById('location2').innerHTML = d.city_name + ','+" "+ d.country_code
        document.getElementById("img2").src= "https://www.weatherbit.io/static/img/icons/"+d.data[1].weather.icon+".png"
            var tempMain2=  Math.round(d.data[1].temp)
        document.getElementById('temp2').innerHTML = tempMain2 + "°C";

        let tempMax2 = Math.round(d.data[1].max_temp);
        let tempMin2 = Math.round(d.data[1].min_temp);

        document.getElementById('min-max-weather2').innerHTML = tempMin2+ "°C" +"/"+ tempMax2+ "°C"
// day 3
        document.getElementById('weather3').innerHTML = d.data[2].weather.description;
        let now3 = new Date(d.data[2].valid_date);
        document.getElementById('date3').innerHTML =setDate1(now3)
        document.getElementById('location3').innerHTML = d.city_name + ','+ " " +d.country_code
        var tempMain3 = Math.round(d.data[2].temp)
        document.getElementById('temp3').innerHTML = tempMain3 + "°C"
        document.getElementById("img3").src = "https://www.weatherbit.io/static/img/icons/"+d.data[2].weather.icon+".png"
        let tempMax3 = Math.round(d.data[2].max_temp);
        let tempMin3 = Math.round(d.data[2].min_temp);


        document.getElementById('min-max-weather3').innerHTML = tempMin3+ "°C" +"/"+ tempMax3+ "°C"
//day4
        document.getElementById('weather4').innerHTML = d.data[3].weather.description;
        let now4 = new Date(d.data[3].valid_date);
        document.getElementById('date4').innerHTML =setDate1(now4)
        document.getElementById('location4').innerHTML = d.city_name + ','+ "" + d.country_code
        var tempMain4 = Math.round(d.data[3].temp)
        document.getElementById('temp4').innerHTML = tempMain4 + "°C"
        document.getElementById("img4").src = "https://www.weatherbit.io/static/img/icons/"+d.data[3].weather.icon+".png"
        let tempMax4 = Math.round(d.data[3].max_temp);
        let tempMin4 = Math.round(d.data[3].min_temp);


        document.getElementById('min-max-weather4').innerHTML = tempMin4+ "°C" +"/"+ tempMax4+ "°C"
//day5
        document.getElementById('weather5').innerHTML = d.data[4].weather.description;
        let now5 = new Date(d.data[4].valid_date);
        document.getElementById('date5').innerHTML =setDate1(now5)
        document.getElementById('location5').innerHTML = d.city_name + ','+""+ d.country_code
        var tempMain5 =  Math.round(d.data[4].temp) ;
        document.getElementById('temp5').innerHTML =  tempMain5 + "°C";
        document.getElementById("img5").src = "https://www.weatherbit.io/static/img/icons/"+d.data[4].weather.icon+".png"
        let tempMax5 = Math.round(d.data[4].max_temp);
        let tempMin5 = Math.round(d.data[4].min_temp);


        document.getElementById('min-max-weather5').innerHTML = tempMin5+ "°C" +"/"+ tempMax5+ "°C"
        var ctx = document.getElementById('myChart').getContext('2d');
        ctx.font="20px";
        ctx.color= "white";
        var myChart = new Chart(ctx, {

            type: 'line',
            data: {
                labels: [setDate1(now), setDate1(now2), setDate1(now3), setDate1(now4), setDate1(now5)],
                datasets: [{
                    label: 'Weather Degrees Changes',
                    data: [tempMain1, tempMain2, tempMain3, tempMain4, tempMain5],
                    backgroundColor: [

                        'rgba(24, 66, 104, 0.6)',
                        'rgba(24, 66, 104, 0.6)',
                        'rgba(24, 66, 104, 0.6)',
                        'rgba(24, 66, 104, 0.6)',
                        'rgba(24, 66, 104, 0.6)',
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
        var apiKey = "819b2bea9492431ea2ff177b25408ce8";
        fetch ('https://api.weatherbit.io/v2.0/forecast/daily?city='+city+'&key='+apiKey)

            .then(weather => weather.json())
            .then(data => {
                drawWeather(data)
                console.log(data)
            } )
            .catch(err => {
                console.log(err);})

    }

    function FetchPhoto(pic){

        fetch('https://api.unsplash.com/search/photos?query='+pic+'&client_id=qsDo-ZdWufGK_Li3mSI8baq2HeuHYjRFBrVdz1asI1k')
            .then(cities => cities.json())
            .then(data => {

                console.log(data)
                let backPic = [data.results[0].urls.regular,data.results[1].urls.regular,data.results[2].urls.regular,
                    data.results[3].urls.regular,data.results[4].urls.regular,data.results[5].urls.regular,
                    data.results[6].urls.regular,data.results[7].urls.regular,data.results[8].urls.regular,
                    data.results[9].urls.regular]
                var RanPic =  backPic[Math.floor(Math.random() * backPic.length)];

                document.getElementById('container').style.backgroundImage = "url"+"("+RanPic+")";
            } )
            .catch(err => {
                console.log(err);})
    }




})();