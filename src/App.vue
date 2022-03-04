<template>
  <img alt="Vue logo" src="./assets/Logo.svg">
  <HelloWorld msg="Games"/>
  <text-input
    label="Search for games"
    icon="search"
    placeholder="Search"
    v-model:value.trim="search"
  />
  
</template>

<script>

// Макет: https://www.figma.com/file/bsvHZBhAhDecuvThNGTmU5/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-(%D0%92%D1%91%D1%80%D1%81%D1%82%D0%BA%D0%B0)?node-id=0%3A1

import HelloWorld from './components/HelloWorld.vue'
import categoryOption from './components/UI/categoryOption.vue'
import textInput from './components/UI/textInput.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    categoryOption,
    textInput
  },
  data() {
    return {
      search: '',
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Inter";
  color: $content900;
  margin-top: 60px;
}
input {
  border: none;
  outline: none;
}
</style>
