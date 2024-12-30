const search=document.querySelector("#searchBotton")
const research=document.querySelector(".cityInput")
//call back function


 search.addEventListener("click",()=>{
  
    console.log("button is clicked")
    getweather();
    
 }) 
 async function getweather (){
   console.log("getweather");
   const cityName=research.value;
   console.log(cityName);
   const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=34f5d9f52d17d59d5c6fc1e5dc89804b`
    );
    
    const data = await response.json();
    console.log(data)
    console.log(data.main.temp_max)
    console.log(data.main.temp_min)
    console.log(data.wind.speed)
    console.log(data.sys.sunset)
    console.log(data.sys.sunrise)
    console.log(data.sys.humidity)
    
 document.querySelector("#temp").innerHTML=data.main.temp_max
 document.querySelector("#tempr").innerHTML=data.main.temp_min
 document.querySelector("#wind").innerHTML=data.wind.speed
 document.querySelector("#sunrise").innerHTML=data.sys.sunrise
 document.querySelector("#sunset").innerHTML=data.sys.sunset
 document.querySelector("#humidity").innerHTML=data.main.humidity
 document.querySelector("#humidity").innerHTML=data.main.humidity
 
 
 
 }
 