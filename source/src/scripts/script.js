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
