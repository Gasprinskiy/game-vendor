<template>
    <button
    class="my-button"
    :class="type"
    >
        <span v-if="icon" class="material-icons icon">
            {{icon}}
        </span>
        <span>{{label}}</span>
    </button>
</template>

<script>

export default {
    props: {
        label: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        }
    }
}

</script>

<style lang="scss" scoped>
    .my-button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        background-color: $primary600;
        color: $base-white;
        border-radius: $radius8;
        cursor: pointer;
        transition: $app-transition;
        &:hover {
            background-color: $primary700;
        }
        .icon {
            margin-right: 10px;
            color: $base-white;
        }
        &.base-white {
            background-color: $base-white;
            outline: 1px solid $content300;
            color: $content900;
            .icon {
                color: $content900;
            }
            &:hover {
                color: $primary600;
                background-color: $content50;
            }
        }
        &.x-btn {
            background: $destructive600;
            padding: 14px;
            &:hover {
                background-color: $destructive700;
            }
            .icon {
                margin: 0;
            }
        }
        &.add-btn {
            padding: 14px;
            .icon {
                margin: 0;
            }
        }
        &.no-bg {
            width: unset;
            background: transparent;
            padding: 2px;
            .icon {
                color: $content900;
                margin: 0;
            }
            &:hover {
                .icon {
                  color: $primary600;  
                }
            }
        }
    }
</style>