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
    $('.dropdown_element').hover(function() {
        $('.dropdown__menu').slideToggle(400)
    });
    $('.categories__btn').click(function() {
        $('.categories__menu').slideToggle(400)
    });
    $('.mobile__header').hover(function() {
        $('.mobile__dropdown').fadeToggle(400)
    });
    $('.smartphones').hover(function() {
        $('.smartPhones__dropdown').fadeToggle(400)
    });
    $('.accessories').hover(function() {
        $('.accessories__dropdown').fadeToggle(600)
    });
    $('.retired').hover(function() {
        $('.retired__dropdown').fadeToggle(600)
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },

    })
});
var swiper = new Swiper('.swiper-container', {
    speed: 600,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: {
        invert: true,
    },
    autoplay: {
        delay: 5000
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});