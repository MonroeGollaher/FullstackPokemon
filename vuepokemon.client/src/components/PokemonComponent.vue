<template>
  <div class="pokemon-componeent">
    <li>
      {{ pokemon.name }}
    </li>
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

</style>
