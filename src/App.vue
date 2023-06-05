<script>
import { store } from './store.js';
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppListCard from './components/AppListCard.vue'
import AppSingleCard from './components/AppSingleCard.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppListCard,
    AppSingleCard
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
            store.arrayCard = risultato.data;
            console.log("Chiamata AXIOS effettuata correttamente");
            console.log(store.arrayCard);
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
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;
</style>
