<template>
    <div class="header-wrapper header">
        <div class="header-top">
            <stockSlider :stock="headerData.sliderInfo"/>
        </div>
        <div class="headre-container container">
            <div class="header-body body">
                <div class="body-left body-content">
                    <q-icon name="place"/>
                    <span>{{headerData.location}}</span>
                </div>
                <div class="body-logo body-content">
                    <q-img src="../assets/Logo.svg"/>
                </div>
                <div class="body-right body-content">
                    <my-button type="no-bg" icon="search"/>
                    <my-button type="no-bg" icon="person"/>
                    <my-button type="no-bg" icon="shopping_cart"/>
                </div>
                <q-separator color="content200" class="separator"/>
            </div>
            <div class="header-nav-links">
                <div 
                v-for="link in headerData.links" 
                :key="link"
                class="link">
                    <my-link :text="link"/>
                </div>
            </div>
        </div>
    </div>
    <div class="header-router-path container">
        <router-path class="router-path"/>
    </div>
</template>

<script>

import stockSlider from '@/components/UI/stockSlider.vue'
import myLink from '@/components/UI/myLink.vue'
import myButton from '@/components/UI/myButton.vue'
import routerPath from '@/components/UI/routerPath.vue'

export default {
    components: {stockSlider, myLink, myButton, routerPath},
    props: {
        headerData: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style lang="scss" scoped>
    .header-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 12px 12px -4px rgba(16, 24, 40, 0.02);
        background: $base-white;
        overflow: hidden;
        .header-top {
            padding: 8px 8px 0px 8px;
        }
        .headre-container {
            display: flex;
            flex-direction: column;
            .header-body {
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                padding: 28px 0px;
                .body-content {
                    width: 33%;
                }
                .body-left {
                    display: flex;
                    align-items: center;
                    i {
                      font-size: 16px;
                      margin-right: 11px;  
                    }
                    span {
                        
                        font-size: 14px;
                        color: $content500;
                    }
                }
                .body-logo {
                    max-width: 152px;
                }
                .body-right {
                    display: flex;
                    justify-content: flex-end;
                    button {
                        font-size: 20px; 
                    }
                    button:not(:last-child) {
                        margin-right: 40px;
                    }
                }
                .separator {
                    width: calc(100% + 250px);
                    left: 0;
                    position: absolute;
                    bottom: 0;
                    left: -125px;
                }
            }
            .header-nav-links {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 0px;
            }
        }
    }
    .header-router-path {
        .router-path {
            padding: 40px 0px;
        }
    }
    @media (max-width: 768px){
        .header-wrapper {
            .headre-container {
                .header-body {
                    justify-content: center;
                    .body-left,
                    .body-right {
                        display: none;
                    }
                }
                .header-nav-links {
                    display: none;
                }
            }
        }
        .header-router-path {
            .router-path {
                padding: 20px 0px;
                .name {
                    font-size: 28px;
                }
            }
        }
    }
</style>