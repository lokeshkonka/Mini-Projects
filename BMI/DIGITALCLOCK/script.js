const clock = document.querySelector(".clock");
// const date = newDate();

 setInterval(() => {    
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
 }, 1000);