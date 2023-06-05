<script>
import { store } from './store.js';
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppListCard from './components/AppListCard.vue'
import AppSingleCard from './components/AppSingleCard.vue'
import AppLoader from './components/AppLoader.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppListCard,
    AppSingleCard,
    AppLoader
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      axios
        .get(store.pathApi)
        .then(
          risultato => {
            store.arrayCard = risultato.data.data;
            store.loading = false;
          })
        .catch(errore => {
          console.log(errore);
        })
    }
  },
  created() {
    this.getCard();
  }
}
</script>

<template>
  <AppLoader v-if="store.loading" />
  <AppHeader v-if="store.loading === false" />
  <AppMain v-if="store.loading === false" />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
