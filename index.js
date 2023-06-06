const apiKey = '775d926f3c684af5928150312230606'
const getWeatherBtn = document.getElementById('get-weather')
const search = document.getElementById('search')
const weatherContainer = document.getElementById('weather-container')

getWeatherBtn.addEventListener('click', () => {
    getData()
})

async function getData() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=seattle`)
        const jsonData = await response.json()
        getWeatherHtml(jsonData)
    }

    catch (err) {
        console.log(err);
    }
}

const getWeatherHtml = (data) => {
    console.log(data)

    let weatherHtml = `
        <div class='weather-container'>
            <h2>${data.location.name}</h2>               
            <p>Current Temp: ${data.current.temp_f} F</p>
        </div>
    `
    
    render(weatherHtml)
}

const render = (data) => {
    weatherContainer.innerHTML = data
}
