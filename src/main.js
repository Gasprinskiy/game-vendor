import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'
import store from './store'
import "@fontsource/inter"

createApp(App)
.use(Quasar, quasarUserOptions)
.use(store)
.use(router)
.mount('#app')
