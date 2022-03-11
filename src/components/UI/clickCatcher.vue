<template>
  <input 
    readonly
    class="click-catcher" 
    @focus="$emit('update:isOpened', true)"
    @blur="$emit('update:isOpened', false)"
  >
</template>

<script>
export default {
    props: {
        isOpened: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style lang="scss" scoped>
    .click-catcher {
        position: absolute;
        z-index: 1000;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        cursor: pointer;
        background: transparent;
    }
</style>