import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import "@fontsource/inter"
createApp(App).use(Quasar, quasarUserOptions).mount('#app')