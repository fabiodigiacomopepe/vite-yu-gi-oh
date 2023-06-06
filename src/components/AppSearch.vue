<script>
import { store } from '../store';

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <form action="#">
        <select name="type" id="tipologia" v-model="store.searchInput" @change="$emit('search_emitOnMain')">
            <option value=""></option>
            <option v-for="(archetipo, index) in store.arrayArchetipo" :key="index" :value="archetipo">
                {{ archetipo }}
            </option>
        </select>
    </form>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

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
</style>
