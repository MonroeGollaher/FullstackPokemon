import { pokeApi } from './AxiosService'
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
}

export const pokemonService = new PokemonService()
