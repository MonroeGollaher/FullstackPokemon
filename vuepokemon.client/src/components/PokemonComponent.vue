<template>
  <div class="pokemon-component">
    <div class="card-container">
      <div class="pokeCard">
        <div class="front-card" :style="'background-color: '+bgColor()+'' ">
          <div class="img-container">
            <img :src="pokemon.data.sprites.other['official-artwork'].front_default" alt="" class="img-fluid">
          </div>
          <h4>#{{ pokemon.data.id }}</h4>
          <h4>{{ pokemon.data.name }}</h4>
          <h4>{{ pokemon.data.types[0].type.name }}</h4>
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
  name: 'PokemonComponent',
  props: {
    pokeProp: Object
  },
  setup(props) {
    return {
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
        const pokeType = pokemon.data.types[0].type.name
        const keys = Object.keys(bgColor)
        if (keys.includes(pokeType)) {
          color = bgColor[pokeType]
        }
        return color
      },
      pokemon: computed(() => props.pokeProp)
    }
  },
  components: {}
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
</style>
