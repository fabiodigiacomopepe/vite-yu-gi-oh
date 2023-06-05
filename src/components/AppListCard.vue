<script>
import { store } from './../store.js';
import AppSingleCard from './AppSingleCard.vue';

export default {
    name: "AppListCard",
    components: {
        AppSingleCard,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div v-for="(card, index) in store.arrayCard" :key="index">
        <AppSingleCard :details="card" />
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
</style>
