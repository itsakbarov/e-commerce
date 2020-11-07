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

$(document).ready(function() {
    console.log('document works!!!');

    var owlTeste = $('.owl-carousel');

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
})
    window.onscroll = function() {
      myFunction()
    };
    var hero = document.querySelector('.site_hero')
    var header = document.querySelector('header')
    var body = document.querySelector("body");
    var sticky = header.offsetHeight/2;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }