import { pokeApi } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class PokemonService {
  async getPokemon() {
    try {
      const res = await pokeApi.get()
      AppState.pokemon = res.data.results
      // console.log(res.data.results, 'pokemon')
    } catch (error) {
      logger.error(error)
    }
  }
}

export const pokemonService = new PokemonService()
