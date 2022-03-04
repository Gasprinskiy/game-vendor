<template>
    <div class="my-input">
        <span class="label">
            <slot name="label"/>
        </span>
        <div class="input">
            <slot name="input-slot"/>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    .my-input {
        width: 100%;
        .input {
          border: 1px solid $content300;
          border-radius: 8px;
          background-color: $base-white; 
        }
        .label {
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 4px;
            text-align: left;
            color: $content500;
        }
    }
</style>