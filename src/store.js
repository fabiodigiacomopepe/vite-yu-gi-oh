import { reactive } from "vue";

export const store = reactive({
    pathApi: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    arrayCard: [],
    loading: true,
    pathApiArchetipo: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    arrayArchetipo: [],
    searchInput: ""
});