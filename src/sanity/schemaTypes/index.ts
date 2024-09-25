import { type SchemaTypeDefinition } from 'sanity'
import { petType } from './petType'
import { blogType } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [petType, blogType],
}
