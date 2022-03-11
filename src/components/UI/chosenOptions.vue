<template>
    <div class="chosen-categories">
        <div 
         v-for="category in chosenOptions"
         :key="category" 
         class="category"
        >
            <category-option
                :text="category"
                @remove-option="removeOpt(category)"
            />
        </div>
        <div class="clear-category" v-if="chosenOptions.length > 1">
            <category-option
                text="Clear All"
                @remove-option="removeOpt(chosenOptions)"
            />
        </div>
    </div>
</template>

<script>

import chosenOptionsUpdater from '@/mixins/chosenOptionsUpdater.js'
import categoryOption from './categoryOption.vue'
export default {
    components: {categoryOption},
    mixins: [chosenOptionsUpdater],
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            opts: []
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .category {
        margin-right: 8px;
    }
</style>