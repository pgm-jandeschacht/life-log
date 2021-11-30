import { gql, useQuery, useLazyQuery } from "@apollo/client";

/**
 * All Album Item related queries
 */

/**
 * Queries
 */

export const GET_ALBUMITEMS = gql`
query {
    albumItems {
        id
        date
    }
}
`

// Info for Home-page
export const GET_ALBUMITEMS_BY_FAMILYMEMBER_ID = gql`
query getAlbumItemsByFamilyMemberId($id: Int!) {
    albumItemsByAuthor(authorId: $id) {
        id
        location
        description
        image
        inAlbumItem {
          id
          familyMember {
            id
            firstname
          }
        }
    }    
}
`;


export const GET_ALLALBUMITEMS_WHERE_FAMILYMEMBER_ID_IN = gql`
query getAllAlbumItemsWhereFamilyMemberIdIn($id: Int!) {
  FamilyMemberInAlbumItemsByFamilyMemberId(familyMemberId: $id) {
    id
    albumItem {
      id
      location
    }
  }
}
`;