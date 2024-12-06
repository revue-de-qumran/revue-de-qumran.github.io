//components
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Argon template
//import Argon from '@/plugins/argon-kit'

//Bootstrap
//import {createBootstrap} from 'bootstrap-vue-next'

// Add the necessary CSS
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(router)
app.use(vuetify)
//app.use(Argon)   //Template
//app.use(createBootstrap({components: true, directives: true})) //Boostsrap
app.mount('#app')