<template>
    <div class="card-container">
        <div class="header">
            <button @click.stop="$emit('edit-product')">Edit</button>
            <button @click.stop="$emit('delete-item')">Delete</button>
        </div>
        <div class="game-title">
            {{ title }}
        </div>
        <div class="card-price">
            {{ priceToShow }}
        </div>
        <div class="game-genre">
            {{ genre }}
        </div>
        <div class="levels">    
            {{ levels }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GameCard',

        props: {
            title: {
                type: String,
                default: 'No title',
            },

            price: {
                type: Number,
                default: 0,
            },

            genre: {
                type: String,
                default: 'No genre',
            },

            levels: {
                type: Number,
                default: 0,
            },

            computed: {
                priceToShow() {
                    return `{$this.price} грн.`
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.card-container {
  width: 200px;
  height: 300px;
  border: 2px solid green;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
}
.card-header {
  text-align: right;
}
.card-sales {
  background-color: greenyellow;
  color: white;
  margin-left: 10px;
  border-radius: 8px;
  padding: 8px;
}
.card-image {
  padding: 10px;
}
.card-image img {
  width: 100%;
}

</style>