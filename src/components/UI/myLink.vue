<template>
    <a v-if="icon" class="page-link with-icon" href="#">
        <span class="material-icons" v-if="icon" >{{icon}}</span>
        <span class="link-text">{{text}}</span>
    </a>
    <a v-else class="page-link" href="#">{{text}}</a>
</template>

<script>

export default {
    props: {
        // path: {
        //     type: String,
        //     required: false
        // },
        text: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-link {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        &:hover {
            color: $primary600;
        }
        &.with-icon {
            font-weight: unset;
            font-size: unset;
            display: flex;
            flex-direction: column;
            align-items: center;
            .active {
                color: $primary600;
            }
            &.mobile-link {
               span.link-text {
                    font-size: 10px;
                    line-height: 14px;
                    color: $content400;  
                }
                span.material-icons {
                    font-size: 16px;
                    color: $content900;
                    margin-bottom: 8px;
                } 
            }
            
            &:hover {
                color: inherit;
            }
        }
    }
</style>