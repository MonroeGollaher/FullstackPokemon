<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <pokemon-component v-for="p in pokemon" :key="p" :poke-prop="p" />
    </div>
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
.home {
  margin: 0;
  user-select: none;
  background: linear-gradient(to right, #c9ffbf, #ffafbd);
}
</style>
