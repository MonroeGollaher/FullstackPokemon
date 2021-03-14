import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class PokemonService {
  async addToCollection(body) {
    console.log(body)
    return await dbContext.Pokemon.create(body)
  }

  async getUserPokemon(userInfo) {
    try {
      const pokemon = await dbContext.Pokemon.find({ creatorId: userInfo.id })
      return pokemon
    } catch (error) {
      console.error(error)
    }
  }
}

export const pokemonService = new PokemonService()
