<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
  }
}
</script>

<template>
  <HelloWorld />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;
</style>
