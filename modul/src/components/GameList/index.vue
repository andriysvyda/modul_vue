<template>
    <div class="container">
        <game-card
        v-for="item in listData"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :genre="item.genre"
        :levels="item.levels"
        @open-product-card="openInfo(item.id)"
        @delete-item="onDelete(item.id)"
        />
    </div>
</template>

<script>
import GameCard from '@/components/GameList/GameCard'
import { mapActions } from 'vuex';

    export default {
        name: 'GameList',

        components: {
            GameCard,
        },

        props: {
            ListData: {
                type: Array,
                default: () => [],
            },
        },
        methods:{
        ...mapActions(['deleteItemAction']),
        openInfo(itemId) {
                this.$router.push({
                    name: "games",
                    params: { id: itemId },
                })
            },
            onDelete(itemId) {
                this.deleteItemAction(itemId)
            },
    }
    }
</script>

<style lang="scss" scoped>

</style>