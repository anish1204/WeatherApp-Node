const request=require('request')

const geocode = (address,callback) =>{
    //const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYW5pc2g0NyIsImEiOiJjbGQwOTVuNDUwcTkyM3RvMTk2Z25tZzd4In0.FZygisdKS--ryj-L5t3_PQ'
    const url='https://api.openweathermap.org/data/2.5/weather?q='+address+'&appid=f0ec3b40875edeabf1beafa48c5b66f5#downloadJSON=true'
    request({url:url,json:true},(error,response)=>{
        if(error)
        {
            callback('Unable to connect to the services')
        }else if(response.body.features.length===0)
        {
            callback('No city found ! Find another search');
        }
        else
        {
           callback(undefined,{
                latitude:response.body.features[0].center[0],
                longitude:response.body.features[0].center[1]
            })
        }
    })
}

module.exports = geocode