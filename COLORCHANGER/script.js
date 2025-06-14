console.log("hello world");
const button =document.querySelectorAll('.btn');
const body = document.querySelector('body');
const clicked = document.querySelector('h2')
button.forEach((button)=>{
  button.addEventListener('click',function (a){
    //console.log(a.target.id);
    const color =a.target.id
    body.style.backgroundColor =color
    clicked.innerText=`You clicked on: ${a.target.id}`
  })

})