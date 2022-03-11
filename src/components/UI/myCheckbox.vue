<template>
    <div 
    class="my-checkbox checkbox" 
    :class="{chekced: chekced}"
    @click="changeCheckec(chekced = !chekced)"
    >
        <q-icon class="checkbox-outline-icon" name="check_box_outline_blank"/>
        <q-icon class="checkbox-done-icon" name="done"/>
    </div>
</template>

<script>


export default {
    props: {
        chekced: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        changeCheckec(bool){
            this.$emit('update:chekced', bool)
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-checkbox {
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius:  $radius4;
        .checkbox-outline-icon {
            font-size: 20px;
        } 
        .checkbox-done-icon {
            font-size: 16px;
            position: absolute;
            opacity: 0;
            color: $base-white;
            font-weight: 500;
        }
        &.chekced {
            background-color: $primary600;
            .checkbox-outline-icon {
              color: $primary600;
            }
            .checkbox-done-icon {
                opacity: 1;
            }
        }
    }
</style>