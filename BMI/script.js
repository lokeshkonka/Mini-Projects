const form = document.querySelector('form')
const bmiresult = document.querySelector('.header')
form.addEventListener('submit',function (e){
    e.preventDefault();
    const height = parseInt(document.querySelector('.height').value)
    const weight = parseInt(document.querySelector('.weight').value)
    const result = document.querySelector('.result');
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (weight<=0 || weight === '' ||isNaN(weight) && height<=0 || height === '' ||isNaN(height)){
        result.innerHTML = 'VALID WEIGHT & HEIGHT PLEASE '
        bmiresult.innerHTML = 'YOU ARE ...DEAD'
        
    }
     else {
        result.innerHTML =` YOUR BMI IS :${bmi} 👌`
    if(bmi<18.5){
        bmiresult.innerHTML =`GO TO HOSPITAL😒😒😒`
    }
    if (bmi>18.5 && bmi<25) {
        bmiresult.innerHTML =`YOU ARE ...NORMIE 😁😁😁`
    }
    if (bmi>25) {
        bmiresult.innerHTML =`YOU ARE ...FAT😋😋😋`

    }
}
})