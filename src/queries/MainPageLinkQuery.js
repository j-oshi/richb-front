import gql from 'graphql-tag'

export const GET_MAIN_MENU_QUERY = gql`
  query Menu{
    menuByName(name: "main") {
      links {
        label
        url {
          path
        }
      } 
    }
  }
`