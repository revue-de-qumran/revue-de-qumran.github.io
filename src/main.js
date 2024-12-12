//components
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//Vuetify
import 'vuetify/styles' // Importer les styles Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'
import colors from 'vuetify/util/colors'

const vuetify = createVuetify({
  blueprint: md3,
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          'surface-bright': '#FFFFFF',
          'surface-light': '#EEEEEE',
          'surface-variant': '#424242',
          'on-surface-variant': '#EEEEEE',


          // primary: colors.pink.darken4, // blue nova 825
          // 'primary-darken-1': colors.purple.base,
          // secondary: colors.pink.base, //Hazy Lilac
          // 'secondary-darken-1': colors.red.base,

          //Pantone Classic Blue 2020
          // primary: 'rgb(167, 97, 125)', // blue nova 825
          // 'primary-darken-1': 'rgb(52, 84 ,139)',
          // secondary: 'rgb(206, 168, 190)', //Hazy Lilac
          //'secondary-darken-1': 'rgb(196,187,186)',
          

          //White, purple, and orange
          // primary: '#C53678',
          // 'primary-darken-1': '#FF5841',
          // secondary: '#FFFFFF',
          // 'secondary-darken-1': '#FFFFFF',

          //Blue nova https://www.benjaminmoore.com/en-us/paint-colors/color-of-the-year-2024
          primary: '#5b6d92', // blue nova 825
          'primary-darken-1': 'rgb(54, 64, 66)', //regent Green
          secondary: '#9b8e9c', //Hazy Lilac
          'secondary-darken-1': 'rgb(140, 138, 123)', //Polar Sky
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
      dark: {
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          'surface-bright': '#FFFFFF',
          'surface-light': '#EEEEEE',
          'surface-variant': '#424242',
          'on-surface-variant': '#EEEEEE',
          //Uniquely Balanced
          
          primary: '#ca80b1', // Barbie Pink
          'primary-darken-1': '#9c4c8d', //Mauve Shadows
          secondary: '##d0baba', //Pink Marshmallow
          'secondary-darken-1': '#a37864',


          // Barbie mood
          // primary: 'rgb(218, 26, 132)', // Barbie Pink
          // 'primary-darken-1': 'rgb(181, 152, 164)', //Mauve Shadows
          // secondary: 'rgb(247, 224, 232)', //Pink Marshmallow
          // 'secondary-darken-1': 'rgb(247, 224, 232)',


          //taupe, beige -> calme et réconfortant
          // primary: '#8a737d',
          // 'primary-darken-1': '#d2b1a2',
          // secondary: '#d3c4c4',

          
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
      custom_theme: {
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          'surface-bright': '#FFFFFF',
          'surface-light': '#EEEEEE',
          'surface-variant': '#424242',
          'on-surface-variant': '#EEEEEE',
          primary: '#8a737d',
          'primary-darken-1': '#d2b1a2',
          secondary: '#d3c4c4',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    },
  },
})


const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')