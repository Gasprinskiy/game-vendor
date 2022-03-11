<template>
    <my-select :isOpened="isOpened" v-range="pushRangedItems">
        <template v-slot:label>
            {{label}}
        </template>
        <template v-slot:select-input>
            <click-catcher v-model:isOpened="isOpened"/>
            <div class="multi-select-input" >
                <div  class="chosen-options-wrapper" >
                    <div 
                    class="chosen-option"
                    v-for="option in chosenOptions"
                    :key="option"
                    >
                        <category-options
                        size="small"
                        @remove-option="removeOpt(option)"
                        :text="option"
                        />
                    </div>
                </div>
                <category-options
                    class="ranged-options"
                    size="small"
                    v-if="rangedItems.length > 0 && chosenOptions.length > 0"
                    :text="'+' + rangedItems.length"
                    @remove-option="removeOpt(rangedItems)"
                />
            </div>
        </template>
        <template v-slot:select-options>
            <div class="multi-select-options" >
                <div 
                v-for="option in options" 
                :key="option"
                class="option">
                    <click-catcher v-model:isOpened="isOpened" @click="pushchosenOptions(option)"/>
                    <span class="option-value">{{option.value}}</span>
                    <span class="options-is-chosen">
                        <my-checkbox :chekced="option.isChosen"/>
                    </span>
                </div>
            </div>
            
        </template>
    </my-select>
</template>

<script>
import categoryOptions from './categoryOption.vue'
import myCheckbox from './myCheckbox.vue'
import range from '@/diretcives/range.js'
import selectMixin from '@/mixins/selectMixin.js'
import chosenOptionsUpdater from '@/mixins/chosenOptionsUpdater.js'

export default {
    components: {categoryOptions, myCheckbox},
    mixins: [selectMixin, chosenOptionsUpdater],
    directives: { range },
    data() {
        return {
            rangedItems: []
        }
    },
    methods: {
        pushRangedItems(n){
            this.rangedItems = n
        }
    }
}
</script>

<style lang="scss" scoped>
    .multi-select-input {
        width: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
        flex-wrap: nowrap;
        position: relative;
        .chosen-options-wrapper {
            display: flex;
            overflow: hidden;
            height: 24px;
            .chosen-option:not(:last-child) {
                margin-right: 4px;
            }
        }
        .ranged-options {
            margin-left: 4px;
        } 
    }
    .multi-select-options {
        width: 100%;
        height: 100%;
        .option {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 11px;
            position: relative;
        }
    }
</style>