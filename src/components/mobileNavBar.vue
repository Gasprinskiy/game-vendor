<template>
    <div class="mobile-nav-bar mobile">
        <div class="mobile-nav-bar-wrapper">
            <div 
            class="mobile-links"
            v-for="link in mobileLinks"
            :key="link"
            >
                <my-link
                class="mobile-link"
                :class="{active: link.isActive}"
                :icon="link.icon" 
                :text="link.title"
                />
            </div>
        </div>
            
    </div>
</template>

<script>

import myLink from './UI/myLink.vue'

export default {
    components: {myLink},
    props: {
        mobileLinks: {
            type: Array,
            default: []
        }
    }
}
</script>

<style lang="scss" scoped>
    .mobile-nav-bar {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: $base-white;
        display: none;
        z-index: 1001;
        .mobile-nav-bar-wrapper {
            width: 100%;
            padding: 14px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .mobile-links {
                width: 20%;
            }
        }
    }
    @media (max-width: 768px) {
        .mobile-nav-bar {
            display: flex;
            align-items: center;
        }
    }
</style>