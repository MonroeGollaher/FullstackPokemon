<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <pokemon-component v-for="p in pokemon" :key="p" :poke-prop="p" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import PokemonComponent from '../components/PokemonComponent'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  components: { PokemonComponent },
  setup() {
    onMounted(async() => {
      await pokemonService.getPokemon()
    })
    return {
      pokemon: computed(() => AppState.pokemon)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
