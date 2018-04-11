; (function (global, $) {

    var Greetr = function (firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    var supportedLanguages = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Holla'
    };

    var formalgreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sessione'
    };

    Greetr.prototype = {
        fullname: function () {
            return `${this.firstname} ${this.lastname}`
        },

        validate: function () {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw 'Invalid Language';
            }
        },

        greeting: function () {
            return `${greetings[this.language]} ${this.firstname}!`
        },

        formalgreetings: function () {
            return `${formalgreetings[this.language]}, ${this.fullname()}!`
        },

        greet: function (formal) {
            var msg;
            //if undefined or null it will be coerces to false
            if (formal) {
                msg = this.formalgreetings();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            //chaining
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ' ' + this.fullname());
            }

            return this;
        },

        setLanguage: function (language) {
            this.language = language;
            this.validate()
            return this;
        },

        HMTLGreeting: function (selector, formal) {
            if (!$) {
                throw 'Jquery not loaded';
            }

            if (!selector) {
                throw 'Missing jquery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalgreetings();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    }

    Greetr.init = function (firstname, lastname, language) {

        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';

        self.validate();
    }

    Greetr.init.prototype = Greetr.prototype;


    global.Greetr = global.G$ = Greetr;

}(window, jQuery))