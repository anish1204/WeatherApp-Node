const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const url = 'https://api.openweathermap.org/data/2.5/weather?q=MUMBAI&appid=f0ec3b40875edeabf1beafa48c5b66f5#downloadJSON=true'

const address=process.argv[2];

if(!address)
{
    console.log("Provide an address");
}
else
{
    geocode('Boston', (error, data) => {
        if(error)
        {
           return console.log(error);
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error)
            {
                return console.log(error)
            }
    
    
            console.log(data.longitude)
            console.log(forecastData)
        })
    })
    

}

