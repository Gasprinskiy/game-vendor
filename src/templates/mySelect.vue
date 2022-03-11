<template>
    <div class="my-select">
        <span class="label">
            <slot name="label"/>
        </span>
        <div class="select">
            <div class="select-input">
                <slot name="select-input"/>
                <q-icon :class="{rotated:isOpened}" class="select-dropdown-icon" name="expand_more"/>
            </div>
            <div class="select-options" :class="{show: isOpened}">
                <slot name="select-options"/>
            </div>
            
        </div>
    </div>
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
    .my-select {
        width: 100%;
        max-width: inherit;
        .select {
            width: 100%;
            position: relative;
            cursor: pointer;
            background-color: $base-white;
            .select-input {
                border: 1px solid $content300;
                border-radius: $radius8;
                background-color: $base-white;
                position: relative;
                display: flex;
                align-items: center;
                flex-wrap: nowrap;
                padding: 10px 11px;
                .select-dropdown-icon {
                    position: absolute;
                    font-size: 18px;
                    right: 11px;
                }
                i {
                    transition: $app-transition;
                } 
                i.rotated {
                    transition: $app-transition;
                    transform: rotate(-180deg);
                }
            }
            .select-options {
                width: 100%;
                max-height: 290px;
                overflow-y: auto;
                overflow-x: hidden;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                transition: $app-transition;
                background-color: $base-white;
                z-index: 1001;
                &.show {
                    opacity: 1;
                    visibility: visible;
                    transition: $app-transition;
                }
            }
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