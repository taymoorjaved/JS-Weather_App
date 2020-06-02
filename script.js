mydata = [];

function checkWeather(){
    let inputLocation = document.getElementById("input-location");
    let errorDiv = document.getElementById("error");
    let cityCountryname = document.getElementById("city-country-name");
    let temperatureData = document.getElementById("temperature-data");
    let maxtemp = document.getElementById("max-tempareture");
    let mintemp = document.getElementById("min-tempareture");
    let crossbtn = document.getElementById("cross-btn");

    

    if(inputLocation.value !== ""){
        errorDiv.innerText = "";

        fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputLocation.value+'&appid=6fd8a22d1d145cd1061cbd2af121912d')
            .then(response => response.json())
            .then(data => {console.log(data)
                
                //cross btn
                // let mycrossbtn = document.createElement("button");
                // mycrossbtn.setAttribute("class", "click-btn");
                // mycrossbtn.setAttribute("onclick", "hideme(event)");
                // mycrossbtn.innerText = "X";
                // crossbtn.appendChild(mycrossbtn);
                // debugger;
                //Location data 
                let locationName = document.createElement("th");
                locationName.innerHTML = "LOCATION";
                let locationData = document.createElement("th");
                locationData.innerHTML = data.name;
            
                cityCountryname.appendChild(locationName);
                cityCountryname.appendChild(locationData);

                //temperature data
                let tempName = document.createElement("th");
                tempName.innerHTML = "TEMPERATURE";
                let tempData = document.createElement("th");
                let covertTemp = Number(data.main.temp - 273.15).toFixed(0);
                tempData.innerHTML = covertTemp +"°C";

                temperatureData.appendChild(tempName);
                temperatureData.appendChild(tempData);

                //max temperature data
                let maxtempName = document.createElement("th");
                maxtempName.innerHTML = "MAX TEMP";
                let maxtempData = document.createElement("th");
                let covertmaxTemp = Number(data.main.temp_max - 273.15).toFixed(0);
                maxtempData.innerHTML = covertmaxTemp + "°C";

                maxtemp.appendChild(maxtempName);
                maxtemp.appendChild(maxtempData);

                //min temperature data
                let mintempName = document.createElement("th");
                mintempName.innerHTML = "MIN TEMP";
                let mintempData = document.createElement("th");
                let covertminTemp = Number(data.main.temp_min - 273.15).toFixed(0);
                mintempData.innerHTML = covertminTemp + "°C";

                mintemp.appendChild(mintempName);
                mintemp.appendChild(mintempData);


                inputLocation.value = "";

            })


        .catch(err => alert("wrong city name"))
    }
    else{
        errorDiv.innerText = "Please Enter City/Country Name"
    }
}
   