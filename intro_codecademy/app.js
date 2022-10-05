
// creating new vue app instance and attached it to the HTML id of app
const app = new Vue({
    el: '#app',
    // adding data property to options object, each piece of data in the object will have a key value pair
    // data is hardcoded for now for lesson, but in real life it is dynamic information
    data: {
        username: 'CoderInTraining',
        newTweet: '',
        tweets: [
            'Started learning to code today. Wish me luck.',
            'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.',
            'Today I start learning Vue. I got this.'
        ],
        bio: 'Excited future software engineer.'
    }
});