const form = document.querySelector('form')
//we have to stop the form to give the value to the server!
form.addEventListener('submit',function(e){
    e.preventDefault()
   const height = parseInt(document.querySelector('#arrow1').value)
   //we are using parse int because when we take mih value it will get us in string so we have to change that string typeof to int so we use parseint 
   const weight = parseInt(document.querySelector('#arrow2').value)
   const result = document.querySelector('#result')
   if(height<0 || isNaN(height) || height === ''){
    result.innerHTML="Please Provide a Valid Height"
   }else if(weight<0 || isNaN(weight) || weight === ''){
    result.innerHTML="Please Provide a Valid weight"
   }else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2);
     result.innerHTML = `<span>${bmi}</span>`
     if(bmi<18.6){
        result.innerHTML = `${bmi} He/she is underweight`;
     }
     if(bmi>18.6 && bmi<25){
        result.innerHTML = `${bmi} Normal Range`;
     }
     if(bmi>25){
        result.innerHTML = `${bmi} He/she is overweight`;
     }
   }

  //this is also an way to do this bactick thing
   
})