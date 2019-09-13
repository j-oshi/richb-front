import gql from 'graphql-tag'

export const PUT_SUBSCRIBER_POST = gql`
  mutation CreateSubscriber($subscribe: NodeNewsletterSignupListCreateInput!) {
    createNodeNewsletterSignupList(input: $subscribe ) {
      ... on EntityCrudOutput {
        test: entity {
          ... on NodeNewsletterSignupList {
            title
            fieldNewsletterSignupName
            fieldNewsletterSignupEmail
          }
        }
      }
      errors
    }
  }
`