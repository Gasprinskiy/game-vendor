<template>
    <agile 
    class="stock-slider"
    :dots="false"
    :infinite="true"
    :autoplay="true"
    :autoplaySpeed="5000"
    :speed="800"
    >
        <div
        class="stock-slider-slide"
        v-for="stockInfo in stock"
        :key="stockInfo"
        >
        {{stockInfo}}
        </div>
        <template v-slot:prevButton>
            <q-icon name="navigate_before"/>
        </template>
        <template v-slot:nextButton>
            <q-icon name="navigate_next"/>
        </template>
    </agile>
</template>

<script>

import { VueAgile } from 'vue-agile'


export default {
    components: {
      agile: VueAgile
    },

    props: {
        stock: {
            type: Array,
            default: []
        }
    }
}
</script>

<style lang="scss" scoped>
    .stock-slider {
        width: 100%;
        border-radius:  $radius4;
        padding: 4px 44px;
        background-color: $primary600;
        color: $base-white;  
        position: relative;
        display: flex;
        align-items: center;
        
        .stock-slider-slide {
            width: 100%;
            
            font-size: 16px;
            line-height: 24px;
            text-align: center;
        }
    }
</style>