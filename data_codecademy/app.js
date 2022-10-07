// creating a new Vue instance, need to use the new keyword to make an instance of the class. const app = new Vue({});.  The only parameter the vue constructor takes is an object, called the options object. 

// Vue allows you to store data that can be calculated using values fro the data object as a separate property called computed. Computed allows you to use a function that can generate a value, rather than storing a specific value in the data. This helps prevent data from getting out of sync.  
// Key-value pairs are stored in a separate computed object, the key is the name of the property, and the value is the function that generates a specific value

// modifying the computed function to include a get and set key, and each has a value of a function. The set function only takes one parameter the new value of the computed value. 

// computed values only recompute when a dynamic (data) value inside the getter function changes.
// the value of watch is an object containing all the properties to watch, the keys are the names of the properties to watch for changes and the values are functions to run whenever the corresponding properties change, the functions can take 2 parameters, the new value and the prior value of the property 

// the methods property is where vue apps store their instance methods, that can be used in many situations.

const app = new Vue({
    // the el property corresponds to the HTML element that should be turned into a vue app
    el: '#app',
    // setting default data values, 
    data: {
        firstName: '',
        lastName: '',
        email: '',
        ticketQuantity: 1,
        ticketType: 'general',
        referrals: [],
        specialRequests: '',
        purchaseAgreementSigned: false
    },

    //   computed data, combines the first and last name if both are included in the data set, otherwise will return the first or last name and specifies certain attributes for the tickets as defined below. it sets the readable ticket type to GA, and only if it is VIP will it change to VIP, and sets a default to tickets unless only one is purchased.
    computed: {
        fullName: {
            get: function () {
                if (this.firstName && this.lastName) {
                    return this.firstName + ' ' + this.lastName;
                } else {
                    return this.firstName || this.lastName;
                }
            },
            set: function (newFullName) {
                const names = newFullName.split(' ');

                if (names.length === 2) {
                    this.firstName = names[0];
                    this.lastName = names[1];
                }

                if (names.length <= 1) {
                    this.firstName = names[0] || '';
                    this.lastName = '';
                }
            }

        },
        ticketDescription: function () {
            let readableTicketType = 'General Admission';
            if (this.ticketType === 'vip') {
                readableTicketType = 'VIP';
            }

            let ticketPluralization = 'tickets';
            if (this.ticketQuantity === 1) {
                ticketPluralization = 'ticket';
            }

            return this.ticketQuantity + ' ' + readableTicketType + ' ' + ticketPluralization;
        }
    },

    // watch added to special requests, when the below terms are in the special request field the ticket type will automatically change to vip
    watch: {
        specialRequests: function (newRequests, oldRequests) {
            if (newRequests.toLowerCase().includes('meet and greet') || newRequests.toLowerCase().includes('meet-and-greet')) {
                this.ticketType = 'vip';
            }
        }
    },

    // method added to reset all form data, when the reset button is pressed 
    methods: {
        resetFields: function () {
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.ticketQuantity = 1;
            this.ticketType = 'general';
            this.referrals = [];
            this.specialRequests = '';
            this.purchaseAgreementSigned = false;
        }
    }
}); F