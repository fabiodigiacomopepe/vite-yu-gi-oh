<script>
export default {
  name: "AppHeader",
}
</script>

<template>
  <header>
    <img src="./../assets/img/Yugioh_anime_logo.webp" alt="logo">
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

header {
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    max-width: 50px;
    height: 100%;
  }

  h1 {
    font-size: 40px;
    font-weight: 400;
  }
}
</style>
