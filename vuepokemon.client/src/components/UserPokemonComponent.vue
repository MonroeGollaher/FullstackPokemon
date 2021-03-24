<template>
  <div class="user-pokemon-component">
    <div class="card-container">
      <div class="pokeCard">
        <div class="front-card" :style="'background-color: '+bgColor()+'' ">
          <div class="img-container">
            <img :src="pokemon.sprites.other['official-artwork'].front_default" alt="" class="img-fluid">
          </div>
          <h4 class="rank">
            #{{ pokemon.id }}
          </h4>
          <h4>{{ pokemon.name }}</h4>
          <h4>{{ pokemon.types[0].type.name }}</h4>
        </div>
        <div class="back-card">
          <div class="stats">
            <button
              @click="removeFromCollection(pokemon._id)"
              :style="'background-color: '+bgColor()+''"
              class="btn rounded-pill text-light"
            >
              Remove from collection
            </button>
            <div class="bar">
              <p class="bar-name"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { pokemonService } from '../services/PokemonService'
export default {
  name: 'UserPokemonComponent',
  props: {
    pokeProp: Object
  },
  setup(props) {
    const state = reactive({

    })
    return {
      state,
      bgColor() {
        const bgColor = {
          normal: '#BDBDAF',
          grass: '#7eb998',
          fire: '#f09990',
          water: '#8ab7e2',
          fighting: '#cc8c7f',
          flying: '#78A1FF',
          poison: '#d183c8',
          ground: ' #f1db90',
          rock: '#e4d699',
          bug: '#d9e086',
          ghost: '#9995e4',
          electric: '#f1e48e',
          psychic: '#e493bf',
          ice: '#a2dee7',
          dragon: '#9c8fe5',
          dark: '#d8a992',
          steel: '#a7a3d8',
          fairy: '#ebacf0'
        }

        let color = '#000'
        const pokemon = this.pokemon
        const pokeType = pokemon.types[0].type.name
        const keys = Object.keys(bgColor)
        if (keys.includes(pokeType)) {
          color = bgColor[pokeType]
        }
        return color
      },
      addToCollection(pokemon, id) {
        pokemonService.addToCollection(pokemon, id)
      },
      removeFromCollection(id) {
        pokemonService.removeFromCollection(id)
      },
      pokemon: computed(() => props.pokeProp)
    }
  },
  components: { }
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 250px;
  height: 300px;
  background-color: transparent;
  font-family: sans-serif;
  margin: 2rem;
  color: white;
  cursor: pointer;
  text-transform:capitalize;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  overflow-x: hidden;
}

.pokeCard {
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.9s ease;
}

.card-container:hover .pokeCard {
  transform: rotateY(180deg);
}

.front-card {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: lightslategray;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  backface-visibility: hidden;
  box-shadow: 0 5px 20px rgba(100, 100, 100, 0.7);
  border-radius: 10px;
}

.img-container {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}

.img-container img {
  width: 150px;
  object-fit: contain;
}

.back-card {
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  background-color: cadetblue;
  transform: rotateY(180deg);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(100, 100, 100, 0.7);
}

.stats {
  width: 100%;
  height: 100%;
  background-color: #393e46;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.rank {
  background-color: rgba(100, 100, 100, 0.7);
  padding: 0.5rem;
  border-radius: 10px;
  margin-top: 10px;
}

// STATS
.bar {
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  color: white;
  width: 90%;
}

.bar p,
span {
  font-size: 12px;
  width: 50px;
  text-transform: capitalize;
}

.bar-wrap {
  background-color: rgb(241, 150, 134);
  width: 100px;
  height: 8px;
  position: relative;
}

.points {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 70%;
  background-color: rgb(209, 77, 54);
}
</style>
