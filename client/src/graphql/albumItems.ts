import { gql, useQuery, useLazyQuery } from "@apollo/client";

/**
<<<<<<< HEAD
 * All Agenda Item related queries
=======
 * All Album Item related queries
>>>>>>> 6226f260650ef743fd3c92d8131a116f9ad14dd8
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
