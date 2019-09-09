import gql from 'graphql-tag'

export const GET_MAIN_MENU_QUERY = gql`
  query {
    nodeQuery (filter: {conditions: [{field: "type", value: ["pages"]}]}) {
      entities {
        entityLabel
        entityId 
        entityUrl {
          routed
          path
        }
      }
    }
  }
`