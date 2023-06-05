<script>
import AppListCard from './AppListCard.vue';

export default {
    name: "AppHeader",
    components: {
        AppListCard,
    }
}
</script>

<template>
    <main>
        <form action="#">
            <select name="type" id="tipologia">
                <option value="Alien">Alien</option>
            </select>
        </form>
        <div class="card_container">
            <div class="cards_found">
                <h4>
                    Found {{ }} cards
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

    form {
        width: 80%;
        margin: 30px auto 0;
        position: relative;
        left: 10px;

        select {
            width: 100px;
            padding: 5px;
            border-radius: 5px;
        }
    }

    .card_container {
        background-color: white;
        margin: 30px auto 0;
        width: 80%;
        height: 600px;
        padding: 50px;

        .cards_found {
            background-color: black;
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
