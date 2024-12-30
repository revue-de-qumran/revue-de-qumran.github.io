# Revue de Qumrân WebSite

The website has be developped in Vue3

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```






I added the following components
npm i vuetify
npm i bootstrap bootstrap-vue-next
npm i unplugin-vue-components -D

### Some remarks on bug and fix
For the problem of img src in assets and their lost in build...
In local only the reference src="/src/assets/img.png" works ("../assets/img.png or @/assets.png" does not work).
Two solutions:
1. put img and datas in /public/assets folder and refer to src="/assets/img.png"
2. Import URL
```sh
<template>
  <img :src="imgUrl" />
</template>

<script>
import imgURL from '@/assets/img.png';

export default {
  data() {
    return {
      imgURL
      };
    }
};
</scritp>
```
See:
https://vite.dev/guide/assets.html#new-url-url-import-meta-url
https://medium.com/@andrewmasonmedia/how-to-use-images-with-vite-and-vue-937307a150c0



### To push only the dist folder on Github use the following git command
```sh
git subtree push --prefix dist origin gh-pages  
```