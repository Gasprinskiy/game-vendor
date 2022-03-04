<template>
    <my-input >
        <template v-slot:label>
            {{label}}
        </template>
        <template v-slot:input-slot>
            <div class="multi-select">
                <div class="multi-select-input">
                    <q-icon v-if="icon" :name="icon"/>
                    <input v-if="options.length <= 0" type="text">
                    <div 
                    v-else 
                    class="chosen-options"
                    v-for="option in chosenOptions"
                    :key="option"
                    >
                        <caregory-options
                        size="small"
                        />
                    </div>
                </div>
                <div class="multi-select-options"></div>
            </div>
        </template>
    </my-input>
</template>

<script>
import myInput from '@/templates/myInput.vue'
import caregoryOptions from './categoryOption.vue'

export default {
    components: {myInput, caregoryOptions},
    props: {
        label: {
            type: String,
            required: false
        },
        icon: {
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
    }
}
</script>

<style lang="scss" scoped>

</style>