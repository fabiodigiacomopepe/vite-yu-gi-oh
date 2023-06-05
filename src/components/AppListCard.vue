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
    <div>
        <AppSingleCard v-for="(card, index) in store.arrayCard" :key="index" :details="card" />
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>
