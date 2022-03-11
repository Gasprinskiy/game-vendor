<template>
    <div class="price-counter">
        <div class="price">
            <div v-if="price < priceInfo.price" class="old-price">
                ${{numberWithSpaces(priceInfo.price)}}
            </div>
            <div class="current-price">
               <span v-if="price > 0">${{numberWithSpaces(price)}}</span>
               <span v-else-if="price === 'unset'"></span>
               <span v-else>Free</span>
            </div>
        </div>
        <div v-if="price < priceInfo.price" class="discount-size" >
            <span>-{{priceInfo.discount}}%</span>
        </div>
    </div>
</template>

<script>

import moneyFormat from '@/mixins/moneyFormat.js'

export default {
    mixins: [moneyFormat],
    props: {
        priceInfo: {
            type: Object,
            default: {}
        }
    },
    computed: {
        price(){
            if(this.priceInfo.discount > 0){
               return (this.priceInfo.price / 100 * this.priceInfo.discount).toFixed()
            }
            return this.priceInfo.price
        }
    }
}
</script>

<style lang="scss" scoped>
    .price-counter {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .price {
            display: flex;
            align-items: center;
            text-align: left;
            font-size: 16px;
            line-height: 24px;
            .old-price {
                font-weight: 500;
                color: $content300;
                text-decoration: line-through;
                margin-right: 8px;
            }
            .current-price {
                font-weight: 600;
            }
        }
        .discount-size {
            padding: 4px 6px;
            border-radius:  $radius4;
            background-color: $lime;
            display: flex;
            align-items: center;
            span {
                font-weight: 600;
                font-size: 12px;
                color: $base-white;
                line-height: 18px;
            }
        }
    }
</style>