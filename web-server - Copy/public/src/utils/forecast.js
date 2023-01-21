const request=require('request')


const forecast=(latitude,longitude,callback)=>{
    const url='https://api.openweathermap.org/data/2.5/weather?q=MUMBAI&appid=f0ec3b40875edeabf1beafa48c5b66f5#downloadJSON=true'
    request({url:url,json:true},(error,response)=>{
        if(error)
        {
            console.log('Some kind of Error occuured');
        }
        else
        {
            callback(undefined,{
                description:response.body.weather[0].main,
               temperature: response.body.main.temp,
                pressure: response.body.main.pressure

            })
        }

    })
}

module.exports=forecast