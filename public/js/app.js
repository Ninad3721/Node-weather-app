    const form_input =document.querySelector('form')
    const cityname = document.querySelector('input')
    const display_area = document.querySelector('#weather')

    form_input.addEventListener('submit', (e)=>
    
    { e.preventDefault()
        
fetch('http://api.weatherstack.com/current?access_key=7c0f5d6b87d560665b2e9e2c3948e4b6&query='+cityname.value).then((response)=>
{response.json().then((data)=>
    {
  
        display_area.textContent=data.current.temperature
    })
       
    })
})

