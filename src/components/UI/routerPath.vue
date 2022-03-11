<template>
  <div class="router-path">
      <div class="path">
        <span 
            v-for="(name, i) in path" 
            :key="i" 
            class="path-name"
            :class="{last: i + 1 === path.length}"
            >
            {{name}}
            <q-icon name="navigate_next"/>
        </span>
      </div>
      <div class="name">
        {{pageName}}
      </div>
  </div>
</template>

<script>

import windowPath from '@/mixins/windowPath.js'

export default {
    mixins: [windowPath]
}
</script>

<style lang="scss" scoped>
    .router-path {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: left;
        .path {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            .path-name {
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: $content500;
                &.last {
                    color: $content300;
                    i {
                        display: none;
                    }
                }
                i {
                    color: $content300;
                }
            }
        }
        .name {
            font-weight: 600;
            font-size: 52px;
        }
    }
</style>