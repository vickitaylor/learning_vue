// tweet component made to be able to have a consistent look across the site. using props for message and author
const Tweet = Vue.component('tweet', {
    props: ['message', 'author'],
    template: '<div class="tweet"><h3>{{ author }}</h3><p>{{ message }}</p></div>'
   });