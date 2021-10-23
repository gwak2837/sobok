import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        storesByTownAndCategories: {
          merge(existing, incoming) {
            if (!existing) {
              return incoming
            } else {
              return [...existing, ...incoming]
            }
          },
          keyArgs: ['town', 'categories', 'order'],
        },
      },
    },
  },
})

export default cache
