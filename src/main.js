import { createApp, h } from "vue";
import App from './App.vue'
import './index.css'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser,faPlus)


const app = createApp({
    render: ()=>h(App)
});

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

