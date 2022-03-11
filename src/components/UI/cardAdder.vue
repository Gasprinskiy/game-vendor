<template>
    <div class="product-cart-adder cart-adder">
        <div class="cart-adder-text">
            You can add a product card by clicking on the button
        </div>
        <div class="cart-adder-btn" >
            <my-button @click="$emit('updateBool')" icon="add_circle_outline" label="Add Card"/>
        </div>
    </div>
</template>

<script>

import myButton from './myButton.vue'

export default {
    components: {myButton},
    props: {
        bool: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        updateShowBts(){
            this.$emit('update.bool', true)
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-cart-adder {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            top: 0;
            left: 0;
            padding: 0px 44px;
            text-align: center;
            z-index: 101;
            border: dashed 2px $primary300 ;
            border-radius: $radius12;
            transition: $app-transition;
            .cart-adder-text {
                font-size: 14px;
                line-height: 20px;
                color: $content300;
                margin-bottom: 20px;
            }
            &.show {
                opacity: 1;
                visibility: visible;
            }
        }
</style>