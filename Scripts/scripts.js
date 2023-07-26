// Adding the countdown functionality
let eventDate = new Date('Sep 24, 2023 12:00:00').getTime(); // This is sample date - it can be changed

let countdown = setInterval(() => {
    let now = new Date().getTime(); 

    let left = eventDate - now;
    
    var days = Math.floor(left / (1000 * 60 * 60 * 24));
    var hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((left % (1000 * 60)) / 1000);

    // Updating the time on THE faqs page
    let diff = (days) + " " + (hours) + " " + (minutes) + " " + (seconds);
    
    let timeleft = diff.split(" ")

    let day = timeleft[0];
    document.querySelector(".a").textContent = day;
    document.querySelector(".a").setAttribute("data-content", day);

    let hour = timeleft[1];
    document.querySelector(".b").textContent = hour;
    document.querySelector(".b").setAttribute("data-content", hour);

    let min = timeleft[2];
    document.querySelector(".c").textContent = min;
    document.querySelector(".c").setAttribute("data-content", min);

    let sec = timeleft[3];
    document.querySelector(".d").textContent = sec;
    document.querySelector(".d").setAttribute("data-content", sec);
}, 1000);