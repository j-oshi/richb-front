import gql from 'graphql-tag'
import { Product, Contactus, ContentAndLink, TwoCol } from './fragments/index'

export const GET_FRONT_PAGE_QUERY = gql`
  query {
    nodeById(id: "1") {
      title: title
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
      entityUrl {
        path
      }
    }
  }
  ${Product}
  ${Contactus}
  ${ContentAndLink}
  ${TwoCol}
`