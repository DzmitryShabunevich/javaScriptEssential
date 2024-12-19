function showweatherDetails(event) {
      event.preventDefault();
      const city = document.getElementById('city').value;
      const apiKey = '8ea714ed3d9f2b5e707aa9ae45b3cc65'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
                console.error('Error fetching weather:', error);
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}

function showTudeWeatherDetails(event) {
    event.preventDefault();
    const lattitude = document.getElementById('lattitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = '8ea714ed3d9f2b5e707aa9ae45b3cc65'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.coord.lon} and ${data.coord.lat}. It is ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
              console.error('Error fetching weather:', error);
              const weatherInfo = document.getElementById('weatherInfo');
              weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}



document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
document.getElementById('tudeForm').addEventListener('submit', showTudeWeatherDetails);