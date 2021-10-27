import { InMemoryCache } from '@apollo/client'

function infiniteScroll(existing: unknown[], incoming: unknown[]) {
  if (!existing) {
    return incoming
  } else {
    return [...existing, ...incoming]
  }
}

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        storesByTownAndCategories: {
          merge: infiniteScroll,
          keyArgs: ['town', 'categories', 'order'],
        },
        menusByTownAndCategory: {
          merge: infiniteScroll,
          keyArgs: ['town', 'category', 'order'],
        },
        feedListByTown: {
          merge: infiniteScroll,
          keyArgs: ['town', 'option', 'order'],
        },
        newsListByTown: {
          merge: infiniteScroll,
          keyArgs: ['categories', 'option', 'order', 'town'],
        },
        newsListByStore: {
          merge: infiniteScroll,
          keyArgs: ['categories', 'storeId', 'order'],
        },
      },
    },
  },
})

export default cache
