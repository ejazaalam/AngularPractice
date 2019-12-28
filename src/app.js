var button = document.querySelector('.button');
var inputValue =document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=b89cb7922607189de06b409abde50291')
    .then( res => res.json())
    .then( data => {
        var nameValue = data['name'];        
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
    
         name.innerHTML = name.Value;
         temp.innerHTML = temp.Value;
         desc.innerHTML = desc.Value;
    })
    .catch(err => alert("Wrong City Name!"))
})