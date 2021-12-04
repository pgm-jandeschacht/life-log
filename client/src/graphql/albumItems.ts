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

export const GET_ALBUMITEM_BY_ID = gql`
query getAlbumItemById($id: Int!) {
  albumItem(id: $id) {
    id
    created_at
    updated_at
    location
    description
    image
    date
    uploaderId
    uploader {
      id
      firstname
      lastname
    }
    inAlbumItem {
      id
      familyMember {
        id
        firstname
        lastname
      }
    }
  }
}

`;

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
      image
      location
    }
  }
}
`;

export const GET_LIKEDPICTURES_BY_FAMILYMEMBER_ID = gql`
query getLikedPicturesByFamilyMemberId($id: Int!) {
  likedPicturesByFamilyMemberId(familyMemberId: $id) {
    id
    albumItem {
      id
      image
      location
      description
    }
  }
}
`;

export const GET_LIKED_PICTURES_BY_FAMILYMEMBER_ID_AND_ALBUMITEM_ID = gql`
query getLikedPicturesByFamilyMemberIdAndAlbumItemId($familyMemberId: Int!, $albumItemId: Int!) {
  likedPictureByFamAndAlbum(albumItemId: $albumItemId, familyMemberId: $familyMemberId) {
    id
    familyMemberId
  }
}
`;

export const LIKE_PICTURE = gql`
mutation likePicture($input : CreateLikedPictureInput!) {
  createLikedPicture(createLikedPictureInput: $input) {
    id
  }
}
`;

export const REMOVE_LIKE = gql`
mutation removeLike($input : CreateLikedPictureInput!) {
  removeLike(createLikedPictureInput: $input) {
    id
  }
}
`;