import gql from 'graphql-tag'

export const PUT_CONTACT_US_POST = gql `
  mutation CreateContactus($message: ContactMessageContactUsCreateInput!) {
    createContactMessageContactUs(input: $message) {
      ... on EntityCrudOutput {
        entity {
          ... on ContactMessageContactUs {
            fieldSendName
            subject
            fieldSenderEmail
            message
          }
        }
      }
      errors
    }
  }
`