require('./modernizr');


import axios from 'axios';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const contact = new Vue({
    el: '#contact',
    data: {
        form: {
            errors: [],
            name: null,
            email: null,
            subject: null
        },
    },
    methods: {
        submitForm() {
            console.log("teste");
            // Mudar para api Selecioanada
            axios.post('http://lumen.infocorp.local/api/contato', this.form);
        },
        checkForm: function () {
            if (this.form.name && this.form.email && this.form.subject) {
                this.submitForm();
                return true;
            }

            this.form.errors = this.errorList;
        }
    },
    computed: {
        errorList() {
            const errors = {};
            if (!this.form.name) errors.name= "Nome é Obrigatório";

            if (!this.form.email) errors.email= "E-mail é Obrigatório";

            if (!this.form.subject) errors.subject = "Assunto é Obrigatório";

            return errors;
        }
    }
});

/**
 * Swiper 4.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 5, 2018
 */

/*import swiper from 'swiper';

const Services = new swiper('.swiper-container', {
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 480px
        991: {
            slidesPerView: 1,
        },
    }
});*/


