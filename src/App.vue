<script>
import { store } from './store.js';
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppListCard from './components/AppListCard.vue'
import AppSingleCard from './components/AppSingleCard.vue'
import AppLoader from './components/AppLoader.vue'
import AppSearch from './components/AppSearch.vue'
import AppCardCounter from './components/AppCardCounter.vue'


export default {
  components: {
    AppHeader,
    AppMain,
    AppListCard,
    AppSingleCard,
    AppLoader,
    AppSearch,
    AppCardCounter
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      let myUrl = store.pathApi;
      if (store.searchInput !== "") {
        myUrl += `&archetype=${store.searchInput}`
      }

      axios
        .get(myUrl)
        .then(
          risultato => {
            store.arrayCard = risultato.data.data;
            store.loading = false;
            console.log("OK");
          })
        .catch(errore => {
          console.log(errore);
        })
    },
    getArchetipo() {
      axios
        .get(store.pathApiArchetipo)
        .then(
          risultatoArchetipo => {
            risultatoArchetipo.data.forEach((el, index) => {
              store.arrayArchetipo.push(risultatoArchetipo.data[index].archetype_name);
            });
            store.loading = false;
          })
        .catch(errore => {
          console.log(errore);
        })
    },
  },
  created() {
    this.getCard();
    this.getArchetipo();
  }
}
</script>

<template>
  <AppLoader v-if="store.loading" />
  <div v-else>
    <AppHeader />
    <AppMain @search_emitOnApp="getCard" />
  </div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
