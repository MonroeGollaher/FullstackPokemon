import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import PokemonSchema from '../models/Pokemon'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Pokemon = mongoose.model('Pokemon', PokemonSchema)
}

export const dbContext = new DbContext()
