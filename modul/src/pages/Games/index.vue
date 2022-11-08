<template>
    <div>
      <div>
        <master-pages>
          <template v-slot:my-link1>
            <router-link to="/">Home</router-link>
          </template>
          <template v-slot:my-link2>
            <router-link to="/about">About</router-link>
          </template>
        </master-pages>
      </div>
      <game-card
      v-if="receivedGameCardId"
      :title="currentGameCard.title"
      :price="currentGameCard.price"
      :genre="currentGameCard.genre"
      :levels="currentGameCard.levels"
      />

      <game-list v-else :list-data="GameList"/>
    </div>
</template>

<script>
import MasterPages from '@/masterpages/MasterPages';
import GameCard from '@/components/GameList';
import GameList from '@/components/GameList';

import { mapGetters } from 'vuex';

export default {
    name: 'Games',

    components: {
        GameCard,
        GameList,
        MasterPages,
    },

    computed: {
      ...mapGetters(["GameList", "getGameCardById"]),
      receivedGameCardId() {
        return this.$route.params.id
    },
     currentGameCard() {
      return this.getGameCardById(this.$route.params.id)
    },
      
    }
}
</script>

<style lang="scss" scoped>

</style>