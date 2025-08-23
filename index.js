document.querySelector('button').addEventListener('click',()=>{
    const place = document.getElementById('location').value;

    function updateTemp(data){
        const element = document.getElementById('weatherInfo');
        element.innerHTML = `${place}Today's Temperature is: ${data.current.temp_c}`;
    }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=ca3b15a0e2564902b1d163853251908&q=${place}&aqi=yes`)

    prom
    .then(response=>response.json())
    .then(data=>updateTemp(data))
})