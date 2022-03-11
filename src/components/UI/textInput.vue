<template>
    <my-input >
        <template v-slot:label>
            {{label}}
        </template>
        <template v-slot:input-slot>
            <div class="text-input">
                <q-icon v-if="icon" :name="icon"/>
                <input 
                type="text"
                v-model="value"
                :placeholder="placeholder"
                @input="updateValue"
                >
            </div>
                
        </template>
    </my-input>
</template>

<script>

import myInput from '@/templates/myInput.vue'

export default {
    components: { myInput },
     props: {
        label: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        value: {
            type: String,
            required: true
        },
        placeholder:{
            type: String,
            required: false
        }
    },
    methods: {
        updateValue(e){
            this.$emit('update:value', e.target.value)
        }
    }
}

</script>

<style lang="scss" scoped>
    .text-input {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: $content400;
        padding: 9px 20px;
        i {
            width: 1%;
            font-size: 20px;
            margin-right: 10px;
            min-width: 16px;
        }
        input {
            width: 99%;
        }
    }
</style>

