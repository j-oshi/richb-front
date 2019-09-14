import gql from 'graphql-tag'

export const GET_PRODUCT_QUERY = gql `
  query ProductQuery($path: String!) {
    route(path: $path) {
    ... on EntityCanonicalUrl {
      entity {
        entityLabel
          ... on NodeProduct {
	  				entityLabel
            title
            fieldProductImage {
              title
              alt
              url
            }
            body {
              value
            }
          }
        }
      }
    }
  }
`