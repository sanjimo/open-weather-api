const searchWeather = () => {
    //get search item
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);
    //clear data
    searchField.value = '';
    //if there is no search item
    if (searchText == '') {
        window.alert('Please enter any city name!');
    }
    //if there is any search item
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=3e591ff5312669b3a539c8595bddf291`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchWeather(data))
    }
}

const displaySearchWeather = city => {
    console.log(city);
    const searchResult = document.getElementById('search-result');
    //clear data
    searchResult.textContent = '';
    if (searchResult.length == 0) {

    }
    else {
        //console.log(city);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                 <div class="card-body shadow p-4 mb-5 mt-5 bg-body rounded w-75 mx-auto">
                    <h5 class="card-title text-center fw-bold fs-3">${city.name}, ${city.sys.country}</h5>
                    <h6 class="card-text text-center fw-semibold fs-2">${city.weather[0].main} (${city.weather[0].description})</h6>
                 </div>
                 <div class="card-body shadow p-4 mb-5 mt-5 bg-body rounded w-75 mx-auto">
                    <h6 class="card-text text-center fw-semibold fs-2">Humidity : ${city.main.humidity}%</h6>
                    <h6 class="card-text text-center fw-semibold fs-2">Pressure : ${city.main.pressure} mBar</h6>
                    <h6 class="card-text text-center fw-semibold fs-2">Wind Speed : ${city.wind.speed} km/h</h6>
                 </div >
             </div > `;
        searchResult.appendChild(div);
    }
}