<template>
  <div class="home container-fluid">
    <!-- HEADER -->
    <div class="row justify-content-center pt-3">
      <div class="col-6 logo">
        <img src="../assets/img/pokemonLogo.png" alt="" class="img-fluid" />
      </div>
    </div>

    <!-- SEARCH BAR -->
    <div class="row search-box justify-content-center pt-4">
      <div class="col-md-6">
        <input
          form-control
          type="text"
          placeholder="Search..."
          class="search-bar shadow"
          v-model="state.query.name"
        />
      </div>
    </div>

    <!-- POKEMON -->
    <div class="row justify-content-center">
      <pokemon-component v-for="p in pokemon" :key="p" :poke-prop="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import PokemonComponent from '../components/PokemonComponent'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  components: { PokemonComponent },
  setup() {
    const state = reactive({
      query: {
        name: ''
      }
    })
    onMounted(async() => {
      await pokemonService.getPokemon()
    })
    return {
      state,
      pokemon: computed(() => AppState.pokemon.filter(p => p.data.name.toLowerCase().includes(state.query.name.toLowerCase())))
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  user-select: none;
  background: linear-gradient(to right, #c9ffbf, #ffafbd);
}

.logo {
  max-height: 250px;
  max-width: 350px;
}

// SEARCH BAR
.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;

  appearance: none;
  background: none;
  border: none;
  outline: none;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;

  color: #313131;
  font-size: 15px;

  transition: 0.4s ease;
}

.search-box .search-bar:focus {
  background-color: rgba(255, 255, 255, 0.75);
}
</style>
