<template>
    <div class="paginations-wrapper">
        <q-pagination
            v-model="current"
            color="content900"
            active-color="primary600"
            :max="max"
            :max-pages="maxPages"
            boundary-numbers
            direction-links
        />
    </div>
</template>

<script>
export default {
    props: {
        current: {
            type: Number,
            default: 1,
            required: false
        },
        max: {
            type: Number,
            default: 99,
            required: false
        },
        maxPages: {
            type: Number,
            default: 6,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .paginations-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 0px;
        border-radius: $radius8;
        background-color: $base-white;
    }
</style>