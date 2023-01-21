const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

messageOne.textContent='From Javascript';
messageTwo.textContent='From MyAnish'
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                messageOne.textContent=data.error
            }
            else {
                messageOne.textContent=data.forecastData.pressure
                messageTwo.textContent=data.forecastData.description
                console.log('The Condition at your place is ' + data.forecastData.description);
                console.log('The temperature over there is ' + data.forecastData.temperature);
                console.log('The pressure over there is ' + data.forecastData.pressure);
                console.log(data.address);
            }
        })

    })

    // console.log(location);
    // console.log('testing');
})