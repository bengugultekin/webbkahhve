export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'kahhvenuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    routes: [
      {
        name: 'product-detail',
        path: '/product/:id?',
        component: 'pages/ProductDetail.vue'
      }
    ]
},

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/firebase',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  firebase:{
    config: {
        apiKey: "AIzaSyCugx7yr0xAFUzrhhmsWhcVB2_JP57XCvY",
        authDomain: "webkahhve.firebaseapp.com",
        databaseURL: "https://webkahhve-default-rtdb.firebaseio.com/",
        projectId: "webkahhve",
        storageBucket: "webkahhve.appspot.com",
        messagingSenderId: "880874762849",
        appId: "1:880874762849:web:36c72bc4a9f820447ff020",
        measurementId: "G-6WF2D9KRS0"
    },
    services: {
        firestore: true,
        auth: true,
        database: true,
        remoteConfig: true
    },
  }
}
