<template>
  <div class="about text-center container-fluid">
    <h1>Welcome, {{ account.name }}!</h1>
    <img class="rounded-circle" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
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
