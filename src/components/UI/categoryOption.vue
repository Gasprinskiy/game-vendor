<template>
  <div 
  class="category-option option"
  :class="size"
  :style="{width: optionSize}"
  >
      <span 
      class="option-text"
      >
        {{text}}
      </span>

      <q-icon 
        class="option-icon"
        data-type="remover"
        name="close"
        @click="$emit('remove-option')"
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
    },
    
  },
  
  computed: {
    optionSize(){
      if(this.size === 'small'){
        return ((this.text.length + 4) * 7) + 10  + 'px'
      } else {
        return ((this.text.length + 2) * 10) + 10 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .category-option {
    min-width: 140px;
    max-width: 160px;
    color: $primary600;
    background-color: $primary100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.small {
      min-width: 45px;
      max-width: 125px;
      padding: 2px 8px;
      border-radius:  $radius4;
      
      font-size: 12px;
      height: unset;
      background-color: $primary50;
    }
    padding: 10px 16px;
    border-radius: $radius8;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    height: 40px;
    cursor: pointer;
    i {
      z-index: 1001;
    }
  }
</style>