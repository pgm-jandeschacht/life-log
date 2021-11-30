import { gql, useQuery, useLazyQuery } from "@apollo/client";

/**
 * All Album Item related queries
 */

/**
 * Queries
 */

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
