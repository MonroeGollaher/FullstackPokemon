import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Pokemon = new Schema(
  {
    name: { type: String, required: true },
    id: { type: Number, required: true },
    abilities: { type: Array, required: true },
    stats: { type: Array, required: true },
    types: { type: Array, required: true },
    ownerId: { type: String, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Pokemon
