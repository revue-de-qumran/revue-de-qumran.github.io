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
    defaultTheme: 'uniquely_balanced_2',
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
          background: '#F0EFEE', //Arrière planc blanc cassé pour texte
          'secondary-darken-1': '#D16F52', // PANTONE™ 16-1441 TCX - Arabesque
          'secondary-darken-2': '#d8ae48', // PANTONE* 14-0952 TCX - Spicy Mustard
          'secondary-darken-3': '#33Becc', // PANTONE™ 15-4825 TCX - Blue Curacao
          'secondary-darken-4': '#a4786a', //PANTONE* 17-1230 TCX - Mocha Mousse
          secondary: '##FF968D', //PANTONE* 15-1435 TCX - Desert Flower
        },
      },
      uniquely_balanced_2: {
        colors: {
          //Uniquely Balanced Pantone 2025
          primary: '#9c4c8d', //Pantone 18-3223 TCX Cattleya Orchid
          'secondary-darken-4': '#ca80b1', //Pantone 16-3116 TCX Opera Mauve
          'primary-darken-1': '#D16F52', // PANTONE™ 16-1441 TCX - Arabesque
          'secondary-darken-1': '#d8ae48', // PANTONE* 14-0952 TCX - Spicy Mustard
          'secondary-darken-3': '#33Becc', // PANTONE™ 15-4825 TCX - Blue Curacao
          'secondary-darken-2': '#a4786a', //PANTONE* 17-1230 TCX - Mocha Mousse
          secondary: '##FF968D', //PANTONE* 15-1435 TCX - Desert Flower
          background: '#F0EFEE', //Arrière planc blanc cassé pour texte
        },
      },
      floral_pathway: {
        colors: {
          //Floral Pathway Pantone 2025
          'secondary-darken-5':  '#8D9F70', // PANTONE™ 16-0123 TCX - Tendril
          primary: '#7990C4', // PANTONE™ 16-4031 TCX - Cornflower Blue
          'primary-darken-1': '#A393B7', // PANTONE™ 16-3815 TCX - Viola
          'secondary-darken-1': 'C99E99#', // PANTONE™ 16-1511 TCX - Rose Tan
          'secondary-darken-2': '#9D7A67', // PANTONE* 17-1230 TCX - Mocha Mousse
          'secondary-darken-3': '#A69A8F', // PANTONE™ 16-1407 TCX - Cobblestone
          'secondary-darken-4': '#978C57', // PANTONE™ 16-0632 TCX - Willow
          secondary: '#F0E9E0', // PANTONE™ 11-0604 TCX - Gardenia
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