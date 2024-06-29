// Special Countdown 
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date(" 5 july 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000)

// Scroll Back To Top 
function scrollTopBack(){
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function (){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 250){
            scrollTopButton.classList.add('scrollActive');
        } else{
            scrollTopButton.classList.remove('scrollActive');
        }
    }
}
scrollTopBack();


// nav hide  
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})



// counter design

document.addEventListener("DOMContentLoaded",() => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
     current = start,
     range = end - start,
     increment = end > start ? 1 : -1,
     step = Math.abs(Math.floor (duration / range)),
     timer = setInterval ( () => {
       current += increment;
       obj.textContent = current;
       if(current == end){
         clearInterval(timer);
       }
 
 
     }, step);
    }
    counter("count1", 0 , 1287, 3000);
    counter("count2", 100 , 5786, 3000);
    counter("count3", 0 , 1440, 3000);
    counter("count4", 0 , 7110, 3000);
 });
 

 