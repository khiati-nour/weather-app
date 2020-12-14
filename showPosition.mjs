import {FetchPhoto} from './FetchPhoto.js';
import {FetchWeather} from './FetchWeather.js';
export const showPosition = (position) => {
    let ApiLocation = "3fb726164f694e7d96c34f856af327c4";
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat, long)
    fetch('https://api.opencagedata.com/geocode/v1/json?q=' + lat + "," + long + '&key=' + ApiLocation)
        .then(location => location.json())
        .then(data => {
            let city2 = data.results[0].components.city
            console.log(city2)
            FetchWeather(city2)
            FetchPhoto(city2);
        })
        .catch(err => {
            console.log(err);
        })
}