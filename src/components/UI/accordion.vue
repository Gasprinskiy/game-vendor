<template>
    <div class="accordion-wrapper">
        <div 
            class="accordion-heading heading"
        >
            <click-catcher @click="toggleAccordion"/>
            <span class="heading-text">{{heading}}</span>
            <span class="heading-icon" :class="{rotate: isOpened}"></span>
        </div>
        <q-separator/>
        <div class="accordion-body body" ref="body">
            <slot name="body"/>
            <q-separator color="content200"/>
        </div>
    </div>
        
</template>

<script>

import clickCatcher from './clickCatcher.vue'

export default {
    components: {clickCatcher},
    data(){
        return {
            isOpened: false
        }
    },
    props: {
        heading: {
            type: String,
            default: ''
        },
    },
    methods: {
        toggleAccordion(e){
            this.isOpened = !this.isOpened
            const body = this.$refs.body
            if(this.isOpened){
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = null;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .accordion-wrapper {
        width: 100%;
        .accordion-heading {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            padding: 24px 0px;
            .heading-text {
                font-weight: 600;
                line-height: 24px;
                font-size: 18px;
            }
            .heading-icon {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                border: 1.6px solid $primary600;
                position: relative;
                &::before,
                &::after{
                    content: '';
                    display: inline-flex;
                    width: 8px;
                    height: 1.6px;
                    border-radius:  $radius4;
                    background-color: $primary600;
                    position: absolute;
                    transition: $app-transition;
                }
                &::before {
                    transform: rotate(90deg);
                }
                &.rotate::before {
                    transform: rotate(0deg);
                }
            }
        }
        .accordion-body {
            width: 100%;
            overflow: hidden;
            max-height: 0;
            transition: max-height $app-transition;
        }
    }
</style>
