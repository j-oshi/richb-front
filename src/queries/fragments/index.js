import gql from 'graphql-tag';

export const Product = gql `
  fragment ParagraphProduct on ParagraphProduct {
    ... on ParagraphProduct {
      products: fieldProducts {
        entity {
          title
          entityId
          ... on NodeProduct {
            type: entityBundle
            image: fieldProductImage {
              alt
              large: derivative(style: LARGE) {
                url
                height
                width
              }
            }
            path {
              alias
            }
            body: body {
              value
            }
          }
        }
      }
    }
  }
`;

export const Contactus = gql `
  fragment ParagraphContactUs on ParagraphContactUs {
    ... on ParagraphContactUs {
      address: fieldAddress {
        addressLine1
        addressLine2
        locality
        countryCode
        postalCode
      }
      Coordinates: fieldLoaction {
        lat
        lon
      }
    }
  }
`;

export const ContentAndLink = gql `
  fragment ParagraphContentAndLink on ParagraphContentAndLink {
    ... on ParagraphContentAndLink {
      type: entityBundle
      image: fieldImage {
        alt
        image: derivative(style: THUMBNAIL) {
          url
          height
          width
        }
      }
      text: fieldContentText {
        value
      }
      link: fieldLink {
        title
        uri
      }
    }
  }
`;

export const TwoCol = gql `
  fragment ParagraphTwoCol on ParagraphTwoCol {
    ... on ParagraphTwoCol {
      title: fieldTitle
      text: fieldContentText {
        value
      }
      link: fieldTwoCol {
        entity {
          title
          entityId 
        }
      }
    }
  }
`;

export const Media = gql `
  fragment ParagraphMedia on ParagraphMedia {
    ... on ParagraphMedia {
      media: fieldMedi {
        entity {
          thumbnail {
            alt
            large: derivative (style: LARGE) {
              url
              width
              height
            }
          }
        }
      }
      fieldContentText {
        processed
      }
    }
  }
`;