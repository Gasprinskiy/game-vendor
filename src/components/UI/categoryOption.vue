<template>
  <div 
  class="category-option option"
  :class="size"
  >
      <span 
      class="option-text"
      >
        {{text}}
      </span>

      <q-icon 
      class="option-icon"
      name="close"
      />
        
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .category-option {
    color: $primary600;
    background-color: $primary50;
    &.small {
      padding: 2px 8px 2px 11px;
      border-radius: 4px;
      font-weight: 400;
      font-size: 12px;
      .option-text {
        margin-right: 9.6px;
      }
    }
    padding: 10px 16px 10px 22px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
  }
</style>