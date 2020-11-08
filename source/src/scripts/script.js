new Vue().$mount('#app');
var Main = {
    data() {
        return {
            input: ''
        }
    }
}
var Ctor = Vue.extend(Main)

new Ctor().$mount('#app');


$(document).ready(function () {
    console.log('document works!!!');

    var owlTeste = $('.header-carousel');

    owlTeste.owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            1200: {
                items: 1
            },
            960: {
                items: 1
            },
            425: {
                items: 1
            },
            320: {
                items: 1
            },
            0: {
                items: 1,
            }
        },
    });

    var owlProduct = $('.offer-carousel');

    owlProduct.owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            1200: {
                items: 3
            },
            960: {
                items: 3
            },
            425: {
                items: 3
            },
            320: {
                items: 2
            },
            0: {
                items: 1,
            }
        },
    });
})
window.onscroll = function () {
    myFunction()
};
var hero = document.querySelector('.site_hero')
var header = document.querySelector('header')
var body = document.querySelector("body");
var sticky = header.offsetHeight / 2;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var x = setInterval(function () {


    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".counter").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".counter").innerHTML = "EXPIRED";
    }
}, 1000);



var countDownDate2 = new Date("Dec 5, 2020 4:31:55").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate2 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".counter2").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".counter2").innerHTML = "EXPIRED";
    }
}, 1000);


var countDownDate3 = new Date("Dec 19, 2022 11:17:21").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate3 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".counter3").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".counter3").innerHTML = "EXPIRED";
    }
}, 1000);