getWeather = async (city) => {
    const res = await fetch(`https://goweather.herokuapp.com/weather/${city}`);

    if(!res.ok) {
        throw new Error (`Could not fetch, status: ${res.status}`);
    }
    const weather = await res.json();
    console.log(weather) ;
    
};

getWeather('Kyiv');
getWeather('Odesa');