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
    defaultTheme: 'uniquely_balanced',
    themes: {
      light: {
        colors: {
          //Blue nova https://www.benjaminmoore.com/en-us/paint-colors/color-of-the-year-2024
          primary: '#5b6d92', // blue nova 825
          'primary-darken-1': 'rgb(54, 64, 66)', //regent Green
          secondary: '#9b8e9c', //Hazy Lilac
          'secondary-darken-1': 'rgb(140, 138, 123)', //Antique Pewter
          'secondary-darken-2': '#cbdde2', //Polar Sky
        },
      },
      dark: {
        colors: {
          //Blue nova https://www.benjaminmoore.com/en-us/paint-colors/color-of-the-year-2024
          primary: '#5b6d92', // blue nova 825
          'primary-darken-1': 'rgb(54, 64, 66)', //regent Green
          secondary: '#9b8e9c', //Hazy Lilac
          'secondary-darken-1': 'rgb(140, 138, 123)', //Antique Pewter
          'secondary-darken-2': '#cbdde2', //Polar Sky
        },
      },
      uniquely_balanced: {
        colors: {
          //Uniquely Balanced Pantone 2025
          primary: '#9c4c8d', //Pantone 18-3223 TCX Cattleya Orchid
          'primary-darken-1': '#ca80b1', //Pantone 16-3116 TCX Opera Mauve
          //secondary: '#F0EFEE', //Arrière planc blanc cassé pour texte
          'secondary-darken-1': '#D16F52', // PANTONE™ 16-1441 TCX - Arabesque
          'secondary-darken-2': '#d8ae48', // PANTONE* 14-0952 TCX - Spicy Mustard
          'secondary-darken-3': '#33Becc', // PANTONE™ 15-4825 TCX - Blue Curacao
          'secondary-darken-4': '#a4786a', //PANTONE* 17-1230 TCX - Mocha Mousse
          secondary: '##FF968D', //PANTONE* 15-1435 TCX - Desert Flower
        },
      },
      deliciousness: {
        colors:{
          //Deliciousness
          secondary: 'rgb(241, 166, 204)', // PANTONE™ 15-2213 TCX - Bonbon
          primary: 'rgb(197, 73, 102)', // PANTONE™ 17-1741 TCX - Party Punch
          'primary-darken-1': 'rgb(126, 33, 42)', // PANTONE™ 19-1537 TCX - Winery
          'secondary-darken-1': 'rgb(236, 106, 55)', // PANTONE™ 16-1459 TCX - Mandarin Orange
          'secondary-darken-2': 'rgb(238, 109, 138)', // PANTONE* 16-1735 TCX - Pink Lemonade
          'secondary-darken-4': 'rgb(164, 120, 100)', //PANTONE™ 17-1230 TCX - Mocha Mousse
          'secondary-darken-5': 'rgb(195, 124, 84)', //PANTONE™ 16-1439 TCX - Caramel
          //secondary: '#ffb18178', //PANTONE™ 14-1231 TCX - Peach Cobbler rgb(255, 177, 129) avec transparence
          },
        },
      barbie: {
        colors: {
          primary: 'rgb(218, 26, 132)', // Barbie Pink
          'primary-darken-1': 'rgb(181, 152, 164)', //Mauve Shadows
          secondary: 'rgb(247, 224, 232)', //Pink Marshmallow
          'secondary-darken-1': 'rgb(247, 224, 232)',
        },
      },
      taupe_beige: {
        colors: {
          primary: '#8a737d',
          'primary-darken-1': '#d2b1a2',
          secondary: '#d3c4c4',
          'secondary-darken-1': '#018786',
        },
      },
    },
  },
})


const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')









// Complete model of theme
//
// const myCustomLightTheme = {
//   dark: false,
//   colors: {
//     background: '#FFFFFF',
//     surface: '#FFFFFF',
//     'surface-bright': '#FFFFFF',
//     'surface-light': '#EEEEEE',
//     'surface-variant': '#424242',
//     'on-surface-variant': '#EEEEEE',
//     primary: '#1867C0',
//     'primary-darken-1': '#1F5592',
//     secondary: '#48A9A6',
//     'secondary-darken-1': '#018786',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   },
//   variables: {
//     'border-color': '#000000',
//     'border-opacity': 0.12,
//     'high-emphasis-opacity': 0.87,
//     'medium-emphasis-opacity': 0.60,
//     'disabled-opacity': 0.38,
//     'idle-opacity': 0.04,
//     'hover-opacity': 0.04,
//     'focus-opacity': 0.12,
//     'selected-opacity': 0.08,
//     'activated-opacity': 0.12,
//     'pressed-opacity': 0.12,
//     'dragged-opacity': 0.08,
//     'theme-kbd': '#212529',
//     'theme-on-kbd': '#FFFFFF',
//     'theme-code': '#F5F5F5',
//     'theme-on-code': '#000000',
//   }
// }