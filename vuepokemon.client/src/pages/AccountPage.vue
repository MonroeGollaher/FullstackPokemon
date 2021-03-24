<template>
  <div class="about text-center container-fluid text-light">
    <img class="rounded-circle" :src="account.picture" alt="" />
    <h1 class="display-4">
      Welcome, {{ account.name }}!
    </h1>
    <!-- <p>{{ account.email }}</p> -->
    <h1 class="display-4 p-3">
      My Pokemon:
    </h1>
    <div class="row justify-content-center">
      <user-pokemon-component v-for="p in pokemon" :key="p" :poke-prop="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import UserPokemonComponent from '../components/UserPokemonComponent.vue'
import { pokemonService } from '../services/PokemonService'
export default {
  components: { UserPokemonComponent },
  name: 'Account',
  setup() {
    onMounted(async() => {
      await pokemonService.getUserPokemon()
      await pokemonService.getPokemon()
    })
    return {
      pokemon: computed(() => AppState.userPokemon),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
.about {
  user-select: none;
  background: linear-gradient(to right, #c9ffbf, #ffafbd);
}

</style>
