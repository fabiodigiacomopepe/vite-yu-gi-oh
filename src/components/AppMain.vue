<script>
import { store } from '../store';
import AppListCard from './AppListCard.vue';
import AppSearch from './AppSearch.vue';

export default {
    name: "AppHeader",
    components: {
        AppListCard,
        AppSearch
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
            <div class="cards_found">
                <h4>
                    Found {{ store.arrayCard.length }} cards
                </h4>
            </div>
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

        .cards_found {
            background-color: #212529;
            color: white;
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: 20px;
            font-weight: bold;

            h4 {
                padding: 20px 0;
            }
        }
    }
}
</style>
