

const API_KEY = `436bd05a32a96ea3b07080dff89388c5`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const getWeather = async(city) => {
    weather.innerHTML = '<h5>Loading...<h5>'
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    console.log(response)
    return showWeather(data)
   
}

const getForcast = async(city) => {
    const url2 = 'https://api.openweathermap.org/data/2.5/forcast/weather?q=${city}&appid=${API_KEY}'
    const response = await fetch(url2);
    const cast = await response.json()
    console.log(cast)
}

const showWeather = (data) =>{
    if(data.cod == "404"){
        weather.innerHTML = '<h5>City Not Found...<h5>'
        return;
    }
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} ℃</h2> 
        <h4> ${data.weather[0].description} </h4> 
        <h5> Speed: ${data.wind.speed} </h5>

    </div>
`
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)