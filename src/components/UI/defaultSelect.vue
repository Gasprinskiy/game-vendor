<template>
    <my-select :isOpened="isOpened">
        <template v-slot:label>
            {{label}}
        </template>
        <template v-slot:select-input>
            <click-catcher v-model:isOpened="isOpened"/>
            <div class="default-select-input">
                <input readonly v-if="chosenVal.length <= 0" type="text">
                <div class="chosen-val">{{chosenVal}}</div>
            </div>
        </template>
        <template v-slot:select-options>
            <div 
            class="default-select-options" >
                <div 
                @click="toggleChosenOption(option)"
                v-for="option in options" 
                :key="option"
                class="option">
                    <span class="option-value">{{option}}</span>
                </div>
            </div>
        </template>
    </my-select>
</template>

<script>

import selectMixin from '@/mixins/selectMixin.js'

export default {
    mixins: [selectMixin],
    props: {
        chosenVal: {
            type: String,
            default: ''
        }
    },
    methods: {
        toggleChosenOption(opt){
            this.$emit('update:chosenVal', opt)
        }
    }
}
</script>

<style lang="scss" scoped>
    .default-select-input {
        .chosen-val {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
        }
    }
    .default-select-options {
        .option {
            padding: 10px 11px;
            position: relative;
        }
    }
</style>