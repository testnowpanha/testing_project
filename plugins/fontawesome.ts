import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import icons you need
import { faArrowRight, faUser, faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight, faUser, faHome)
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
