<template>
  <div class="pokemon-componeent">
    <div class="card-container">
      <div class="pokeCard">
        <div class="front-card">
          <img :src="pokemon.data.sprites.front_default" alt="" class="img-fluid">
          <h4># {{ pokemon.data.id }}</h4>
          <h4>{{ pokemon.data.name }}</h4>
          <h4>
            {{ pokemon.data.types[0].type.name }}
          </h4>
        </div>
        <div class="back-card">
          <div class="stats">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'PokemonComponeent',
  props: {
    pokeProp: Object
  },
  setup(props) {
    return {
      pokemon: computed(() => props.pokeProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
img {
  height: 40px;
}
</style>
