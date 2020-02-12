/*
API KEY: 3c481a17ec1c4b275eed746ad29d58b1
API CALL: http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

5 day forecast example for Stockholm and the units is metric
api.openweathermap.org/data/2.5/forecast?id=2673730&units=metric&appid=3c481a17ec1c4b275eed746ad29d58b1

city id stockholm: 2673730
*/

// Testing to print out some of the respons from the api
const city = document.getElementById("city")
const temp = document.getElementById("temp")
const wind = document.getElementById("wind")
const description = document.getElementById("description")
const sunrise = document.getElementById("sunrise")
const sunset = document.getElementById("sunset")

// Fetch function
const key = "3c481a17ec1c4b275eed746ad29d58b1" //Should be hidden in .gitignore
const stockholm = "2673730"
const units = "metric"
const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${stockholm}&units=${units}&appid=${key}`


const getWeatherForecast = async (url) => {
  await fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((myJson) => {
      // Update weather in Stockholm
      todayForecast(myJson)
      // Invoke fivedayforecast function when its done here
      fiveDayForecast(myJson)
    })
    .catch((err) => {
      console.log(err)
    })
}

getWeatherForecast(weatherUrl);


const todayForecast = (myJson) => {
  // Targeting my id and update with current information from api.
  // This is how I can show big card information about stockholm.
  // Add icon depending on myJson.list[0].weather.id, rain, cloudy, sunny etc.
  city.innerHTML = `City: ${myJson.city.name}`
  temp.innerHTML = `Current temp in ${myJson.city.name} is ${myJson.list[0].main.temp}&#176`
  wind.innerHTML = `Wind speed: ${myJson.list[0].wind.speed} m/s`
  description.innerHTML = `Description: ${myJson.list[0].weather[0].description}`

  // Convert sunrise and sunset from unix timestamp
  let convertedSunrise = new Date(myJson.city.sunrise * 1000) 
  let convertedSunset = new Date(myJson.city.sunset * 1000)
  sunrise.innerHTML = `Sunrise: ${convertedSunrise.toLocaleTimeString({}, {timeStyle: 'short'})}`
  sunset.innerHTML = `Sunset: ${convertedSunset.toLocaleTimeString({}, {timeStyle: 'short'})}`
}


const fiveDayForecast = (myJson) => {
  // Do my five day forecast here!

  myJson.list.forEach((main) => {
    // Find all date and time, use split to get rid of time
    const date = main.dt_txt.split(' ')[0]
    console.log(date)
 })
}


// TrafikLAB
// Företaget som hanterar all kollektivtrafik, bland annat SL.
// Skapat ett konto, godkänt licenser och avtal.
// https://www.trafiklab.se/api/sl-storningsinformation-2
// API nyckel: 47b6750ccfc04bfd9145a16eeda8fad4

/* fetch url till sl
https://api.sl.se/api2/deviations.Json?key=47b6750ccfc04bfd9145a16eeda8fad4&transportMode=metro
*/

