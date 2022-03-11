<template>
    <div class="banner-wrapper">
        <div class="banner-content">
            <slot name="content"/>
        </div>
        <div class="banner-image" >
            <slot name="image"/>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style lang="scss" scoped>
    .banner-wrapper {
        width: 100%;
        height: 100%;
        border-radius: $radius16;
    }
</style>