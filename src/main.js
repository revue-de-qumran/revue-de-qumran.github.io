//components
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Vuetify
//import 'vuetify/styles' // Importer les styles Vuetify
//import { createVuetify } from 'vuetify'
//import './plugins/vuetify.js'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
//   theme: {
//     defaultTheme: 'light',
//     themes: {
//       light: {
//         colors: {
//           primary: '#111111',
//           secondary: '#03DAC6',
//         },
//       },
//     },
//   },
// })


const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')