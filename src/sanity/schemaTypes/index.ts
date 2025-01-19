import { type SchemaTypeDefinition } from 'sanity';
import products from "./products";
import signup from "./signup"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,signup],
}
