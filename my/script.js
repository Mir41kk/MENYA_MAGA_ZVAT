
const toggler = document.getElementById('toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', () => {
    menu.classList.toggle('active');
});
const toggleCheckbox = document.getElementById('toggle-mode');
const linkElement = document.querySelector('link[href="./assets/css/dark.css"]');
const hero = document.querySelector('img[src="./assets/images/Franklin.webp"]')

toggleCheckbox.addEventListener('change', function () {
    if (toggleCheckbox.checked) {
        linkElement.setAttribute('href', './assets/css/light.css');
        hero.setAttribute('src', './assets/images/trevor.png')
    } else {
        linkElement.setAttribute('href', './assets/css/dark.css');
        hero.setAttribute('src', './assets/images/Franklin.webp')
    }
});
function convertCurrency() {
    var usd = parseFloat(document.getElementById("usd").value);
    var uah = parseFloat(document.getElementById("uah").value);
    var rate = 36.43;


    if (!isNaN(usd)) {
        uah = usd * rate;
        document.getElementById("uah").value = uah.toFixed(2);
    } else if (!isNaN(uah)) {
        usd = uah / rate;
        document.getElementById("usd").value = usd.toFixed(2);
    }

    document.getElementById("result").innerHTML = usd.toFixed(2) + " Usd = " + uah.toFixed(2) + " Uah";
}



function createCalendar(elem, year, month) {

    let mon = month - 1;
    let d = new Date(year, mon);
    let table = '<table class="table"><tr><th>Mon</th><th>Tue</th><th>Mon</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

const dl = new Date();
let monk = dl.getMonth();
let mt = monk + 1;
let years = dl.getFullYear();
createCalendar(calendar, years, mt);
let nows = document.querySelector('.nows');
nows.innerHTML = 'Today - ' + ([0, 6].indexOf((new Date()).getDay()) < 0 ? 'Workday' : 'Day off');


$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height() - 20
    var tags = $(".fade")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible")
        } else {
            $(tag).removeClass("visible")
        }
    }
});
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});
let startDate = new Date("October 2, 2023 00:00:00").getTime();

let x = setInterval(function () {


    let now = new Date().getTime();

    let diff = (startDate - now);

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "c ";

    if (diff < 0) {
        clearInterval(x);
        document.querySelector('#timers').innerHTML = ' ';
        document.getElementById("countdown").innerHTML = "Promotion expired";
    }
}, 1000);
function Play() { 
    let number = Math.floor(Math.random() * 10)
    while(true){
        let input = prompt(`Input number from 0 to 10 but if you want to exit type "Exit"` + `\n` + `Good luck`)    
        if(input == "Exit" || input == "exit"){
            break
        }  
        else if(isNaN(input) || input == ""){
            alert("Input error")
            break
        }
        else if(input < number){
            alert("Input number less than secret number!") 
        }
        else if(input > number){
            alert("Input number Bigger than secret number!") 
        } 
        else{
            alert("Win")
            break
        }
    }
}

