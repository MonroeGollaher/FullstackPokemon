import { pokeApi, api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class PokemonService {
  async getPokemon() {
    try {
      const res = await pokeApi.get()
      const pokemon = await Promise.all(res.data.results.map(async p => {
        const pokeRecord = await pokeApi.get(p.url)
        return pokeRecord
      }))
      console.log(pokemon)
      AppState.pokemon = pokemon
    } catch (error) {
      logger.error(error)
    }
  }

  async addToCollection(pokemon, id) {
    try {
      pokemon.id = id
      const res = await api.post('/api/mypokemon/', pokemon)
      AppState.userPokemon = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getUserPokemon() {
    try {
      const res = await api.get('/api/mypokemon')
      AppState.userPokemon = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const pokemonService = new PokemonService()
