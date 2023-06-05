<script>
export default {
    name: "AppSingleCard",
    props: {
        details: Object
    }
}
</script>

<template>
    <div class="card">
        <div>
            <img :src="details.card_images[0].image_url" :alt="details.name">
        </div>
        <div class="name">
            {{ details.name.toUpperCase() }}
        </div>
        <div class="type">
            {{ details.archetype }}
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.card {
    width: calc(100% / 5 - 16px);
    background-color: $colore_primario;


    .name,
    .type {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        font-size: 14px;
    }

    .name {
        color: white;
        font-weight: bold;
    }

    img {
        max-width: 100%;
    }
}
</style>
