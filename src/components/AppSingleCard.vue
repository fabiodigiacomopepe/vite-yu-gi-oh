<script>
export default {
    name: "AppSingleCard",
    props: {
        details: Object
    }
}
</script>

<template>
    {{ details.type }}
    a
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
</style>
