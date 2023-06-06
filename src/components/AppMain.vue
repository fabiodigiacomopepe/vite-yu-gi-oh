<script>
import { store } from '../store';
import AppListCard from './AppListCard.vue';
import AppSearch from './AppSearch.vue';
import AppCardCounter from './AppCardCounter.vue';

export default {
    name: "AppHeader",
    components: {
        AppListCard,
        AppSearch,
        AppCardCounter
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <AppSearch @search_emitOnMain="$emit('search_emitOnApp')" />
        <div class="card_container">
            <AppCardCounter />
            <div>
                <AppListCard />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

main {
    .card_container {
        background-color: white;
        margin: 30px auto 0;
        width: 80%;
        padding: 50px 50px 10px;
    }
}
</style>
