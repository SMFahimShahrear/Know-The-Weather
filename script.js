let weather ={
    "apiKey": "8d343b591d48eb4512d7353e301a35e9",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8d343b591d48eb4512d7353e301a35e9&units=metric")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".cityName").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".icon").src = ""
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " kmph";
        document.querySelector(".mainContainer").classList.remove("notSearched");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function(){
            this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
    document.querySelector(".mainContainer").classList.remove("notSearched");
});


document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search(); 
        document.querySelector(".mainContainer").classList.remove("notSearched");
    }
})