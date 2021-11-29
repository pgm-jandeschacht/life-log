import { gql, useQuery, useLazyQuery } from "@apollo/client";

/**
 * All WishList Item related queries
 */

/**
 * Queries
 */

// Info for "My WishList"
export const GET_WISHLISTITEMS_BY_FAMILYMEMBER_ID = gql`
query getWishListItemsByFamilyMemberId($id: Int!) {
  wishListItemsByAuthor(authorId: $id) {
    id
    content
    completed
    dueDate
    inWishListItem {
      id
      familyMember {
        id
        firstname
      }
    }
  }
}    
`;
