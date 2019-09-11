import gql from 'graphql-tag'
import {
  Media
} from './fragments/index'

export const GET_MEDIA_QUERY = gql `
  query MediaQuery{
    nodeById(id: "1") {
      ... on NodePages {
        fieldMedia {
          entity {
            ...ParagraphMedia
          }
        }
      }
    }
  }
  ${Media}
`