require('dotenv').config()

const isProd = process.env.NODE_ENV === 'production'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/css/bootstrap-grid.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@300;400&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
  ],

  /*
  ** MomentJS for NuxtJS
  */
  moment: {
    locales: ['vi']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources'
  ],


  /*
  ** Style resources configuration
  */
  styleResources: {
    // your settings here
    sass: [],
    scss: [],
   },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:3002/api'
  },

  env: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3009'
  },

  /*
  ** Toast configuration
  */
  toast: {
    position: 'bottom-center',
    fitToScreen: true,
    fullWidth: true,
    singleton: true
  },

  /*
  ** Config manifest for PWA Web App
  */
  manifest: {
    short_name: 'Project short Name',
    name: 'Project Name',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    description: 'Start NuxtJS from Scratch!',
    lang: 'vi-VN',
    orientation: 'portrait-primary'
  },

  /*
  ** Build configuration
  */
  build: {
    analyze: !isProd,
    cache: !isProd,
    cssSourceMap: !isProd,
    optimization: {
      minimize: isProd
    },
    extractCss: isProd,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
