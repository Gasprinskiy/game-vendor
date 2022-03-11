<template>
    <div class="rating-wrapper">
        <div class="rating-default-star star" >
            <img v-for="n in 5" :key="n" src="@/assets/img/star-default.svg" alt="">
        </div>
        <div class="rating-filled-star star" >
            <img v-for="r in rating.grade" :key="r" src="@/assets/img/star-filled.svg" alt="">
        </div>
        <span class="rating-votes" >
            {{numberWithSpaces(rating.votes)}}
        </span>
    </div>
</template>

<script>

import moneyFormat from '@/mixins/moneyFormat.js'

export default {
    mixins: [moneyFormat],
    props:{
        rating:{
            type: Object,
            default: {}
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .rating-wrapper {
        display: flex;
        position: relative;
        justify-content: flex-start;
        .rating-filled-star {
            position: absolute;
            z-index: 100;
        }
        .star img:not(:last-child){
            margin-right: 4px;
        }
        .rating-votes {
            display: inline-flex;
            
            font-size: 12px;
            color: $content600;
            margin-left: 8px;
            margin-top: 2px;
        }
    }
</style>