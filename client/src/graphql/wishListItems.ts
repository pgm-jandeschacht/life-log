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

export const GET_WISHLISTITEM_BY_WISHLISTITEM_ID = gql`
query getWishListItemByWishListItemId($id: Int!) {
  wishListItem(id: $id) {
    id
    content
    completed
    dueDate
  }
}
`;

// Create new WishList Item
export const CREATE_WISHLISTITEM = gql`
mutation createWishListItem($input: CreateWishListItemInput!) {
  createWishListItem(createWishListItemInput: $input) {
    id
  }
}
`;

// Delete wishlistItem
export const DELETE_WISHLISTITEM = gql`
mutation deleteWishListItem($id: Int!) {
  deleteWishListItem(id: $id) {
    id
  }
}
`;

// Get wishlistItem by id
export const GET_WISHLISTITEM_BY_ID = gql`
query getWishListItemById($id: Int!) {
  wishListItem(id: $id) {
    id
    content
    completed
    dueDate
    authorId
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

// Add family members to wishlistItem
// needed input:
// {"input": {
//   "familyMemberId": 3,
//   "wishListItemId": 50
// }}
export const ADD_FAMILYMEMBER_TO_FAMILYMEMBER_IN_WISHLISTITEM = gql`
mutation create($input: CreateFamilyMemberInWishListItemInput!){
  createFamilyMemberInWishListItem(createFamilyMemberInWishListItemInput: $input) {
    id
  }
}
`;
