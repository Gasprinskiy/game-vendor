import mySelect from '@/templates/mySelect.vue'
import clickCatcher from '@/components/UI/clickCatcher.vue'
export default {
    components: {mySelect, clickCatcher},
    props: {
        label: {
            type: String,
            required: false
        },
        options: {
            type: Array,
            required: true
        },
        placeholder:{
            type: String,
            required: false
        }
    },
    data(){
        return {
            isOpened: false
        }
    },
}