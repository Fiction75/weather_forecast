let weather ={
    "apiKey": "096e52078b85d81bf5caea93c598f68f",
    weatherFetch:function(city){
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        fetch(url)
        .then(response=>response.json())
        .then(data => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {name}=data;
        const {icon,description}= data.weather[0];
        const {temp, humidity}=data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText="Weather in " +name ;
        document.querySelector(".icon").src=
        "https://openweathermap.org/img/wn/" +icon+".png";
        document.querySelector(".description").innerText=description ;
        document.querySelector(".temp").innerText=temp.toFixed()+ "°C";
        document.querySelector(".humidity").innerText="Humidity: " +humidity + "%" ;
        document.querySelector(".wind").innerText="Wind speed: "+speed+" km/h";
        document.querySelector(".weather").classList.remove("loading");
        
    },
    search: function(){
        this.weatherFetch(document.querySelector(".search-bar").value);
    }
} 


document.querySelector(".search button")
.addEventListener("click",function(){
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if (event.key=="Enter"){
        weather.search();
    }
});

weather.weatherFetch("Belgrade");