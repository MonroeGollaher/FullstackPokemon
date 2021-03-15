import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
import { pokemonService } from '../services/PokemonService'

export class PokemonController extends BaseController {
  constructor() {
    super('api/mypokemon')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserPokemon)
      .post('', this.addtoCollection)
      .delete('/:id', this.removeFromCollection)
  }

  async addtoCollection(req, res, next) {
    try {
      req.body.ownerId = req.userInfo.id
      res.send(await pokemonService.addToCollection(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getUserPokemon(req, res, next) {
    try {
      res.send(await pokemonService.getUserPokemon(req.userInfo))
    } catch (error) {
      next(error)
    }
  }

  async removeFromCollection(req, res, next) {
    try {
      res.send(await pokemonService.removeFromCollection(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
