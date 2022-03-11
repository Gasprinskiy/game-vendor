<template>
    <div class="product-card product" 
    @mouseover="checkProductStatus(product.status)"
    @mouseout="checkProductStatus(product.status)"
    >
    
        <div class="product-img">
            <q-img v-if="product.img" :src="require(`@/assets/img/${product.img}`)"/>
            <q-img v-else :src="require('@/assets/img/no-image.jpg')"/>
            <div class="card-bts" :class="{show: showBtns}">
               <my-button 
               @click="$emit('remove', product)" 
               v-if="product.status" 
               type="x-btn" 
               icon="close"
               />
               <my-button
               @click="$emit('add', product)" 
               v-else 
               type="add-btn" 
               icon="add_circle_outline"
               /> 
            </div>
            
        </div>
        <div class="product-info info">
            <div class="info-body">
                <div class="product-category">
                    <product-category :text="product.category"/>
                </div>
                <div class="product-title">
                    {{product.title}}
                </div>
                <div class="product-rating">
                    <rating :rating="product.rating" />
                </div>
                <div class="product-description">
                    {{product.description}}
                </div>
                <q-separator color="content200" class="separator"/>
            </div>
            <div class="info-bottom">
                <div class="product-price">
                    <price-counter :priceInfo="product.priceInfo"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import productCategory from './productCategory.vue'
import rating from './rating.vue'
import priceCounter from './priceCounter.vue'
import myButton from './myButton.vue'

export default {
    components: {productCategory, rating, priceCounter, myButton},
    data(){
        return {
            isInCart: false,
            ableToAdd: false
        }
    },
    props: {
        product: {
            type: Object,
            default: {}
        },
        showBtns: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        checkProductStatus(status){
            if(status){
                this.isInCart = !this.isInCart
            } else {
                this.ableToAdd = !this.ableToAdd
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-card {
        width: 100%;
        // max-height: 495px;
        // min-height: 495px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        background-color: $base-white;
        border-radius: $radius12;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        .product-img {
                width: 100%;
                overflow: hidden;
                position: relative;
                border-radius: $radius8;
                .card-bts {
                    transition: $app-transition;
                    opacity: 0;
                    visibility: hidden;
                    &.show {
                        opacity: 1;
                        visibility: visible;
                    }
                    button {
                        width: auto;
                        position: absolute;
                        z-index: 100;
                        top: 8px;
                        right: 8px;
                    } 
                }
                
            }
        .product-info{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0px 12px;
            .info-body {
                padding: 20px 0px 0px 0px;
                .product-title {
                    margin: 12px 0px;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 24px;
                }
                .product-rating {
                    margin-bottom: 12px;
                }
                .product-description {
                    font-size: 14px;
                    line-height: 20px;
                    color: $content400;
                    margin-bottom: 12px;
                    height: 60px;
                }
            }
            .info-bottom {
                width: 100%;
                display: flex;
                // padding: 0px 24px;
                .product-price {
                    width: 100%;
                    padding: 17px 0px 9px 0px;
                }
            }
        }
    }
</style>