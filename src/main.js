import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Animate on Scroll
import 'aos/dist/aos.css'
import AOS from 'aos'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA4vuozz585TYhptPKydlJCuu2w0eZvoOM',
  authDomain: 'osung-foods.firebaseapp.com',
  projectId: 'osung-foods',
  storageBucket: 'osung-foods.appspot.com',
  messagingSenderId: '698428537352',
  appId: '1:698428537352:web:0cb0aaa66a085716292fbd'
}

const app = createApp(App)

const fireApp = initializeApp(firebaseConfig)
const db = getFirestore(fireApp)

export { fireApp, db }
app.use(vuetify)
app.use(AOS.init)
app.use(router)
app.mount('#app')
