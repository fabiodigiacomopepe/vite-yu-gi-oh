<script>
import { store } from '../store';

export default {
    name: "AppCardCounter",
    data() {
        return {
            store
        }
    },
    computed: {
        cardTrovate() {
            return store.arrayCard.length;
        }
    }
}
</script>

<template>
    <div class="cards_found">
        <h4>
            Found {{ cardTrovate }} cards
        </h4>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

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
</style>
