import {createStore} from "vuex"

const store = createStore({
    state(){
        return{
            count: 0,
            listData: [
                {
                    id: 1,
                    title: 'Grand Theft Auto 5',
                    price: 550,
                    genre: 'Action, Third person, Single player , Multiplayer',
                    levels: 33,
                },

                {
                    id: 2,
                    title: 'Counter-Strike: Global Offensive',
                    price: 300,
                    genre: 'FPS, First person, Multiplayer, Shooter',
                    levels: 0,
                },

                {
                    id: 3,
                    title: 'Minecraft',
                    price: 1999,
                    genre: 'Sandbox, Multiplayer, Third person, First person',
                    levels: 0,
                },
            ]
        }
    },

    getters: {
        GameList: (state) => state.listData,

        getGameCardById: (state) => (id) => id ? state.listData.find((item) => item.id == id) : {}
    },

    mutations: {
        deleteItem(state, itemIdForDelete) {
            state.listData = state.listData.filter(
              (item) => item.id !== itemIdForDelete
            )
          },
    },

    actions: {
        deleteItemAction({ commit }, id) {
          commit('deleteItem', id)
        },
      },
})

export default store