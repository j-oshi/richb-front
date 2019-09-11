import gql from 'graphql-tag'
import {
  Product,
  Contactus,
  ContentAndLink,
  TwoCol
} from './fragments/index'

export const GET_PAGE_QUERY = gql `
  query PageQuery($path: String!) {
    route(path: $path) {
      ... on EntityCanonicalUrl {
        entity {
          entityLabel
            ... on NodePages {
              body {
                value
                summary
              }
              paragraphs: fieldParagraphContent {    
                entity {
                  entityUuid
                  entityBundle
                  ...ParagraphProduct
                  ...ParagraphContactUs
                  ...ParagraphContentAndLink 
                  ...ParagraphTwoCol
                }
              }
            }
          }
        }
      }
    }
    ${Product}
    ${Contactus}
    ${ContentAndLink}
    ${TwoCol}
`