import { gql, useQuery, useLazyQuery } from "@apollo/client";

/**
 * All Familymembers related queries
 */


/**
 * Queries
 */

// Info for Home-page
export const GET_FAMILYMEMBERINFO_BY_ID = gql`
query getFamilyMemberInfoById($id: Int!) {
    familyMemberById(id: $id) {
        id
        firstname,
        image
        isSender
        agendaItems {
            id
        }
    }    
}
`;

// Info for About me page
export const GET_FAMILYMEMBERDETAILS_BY_FAMILYMEMBERID = gql`
query getFamilyMemberInfoById($id: Int!) {
    familyMemberById(id: $id) {
        id
        firstname,
        lastname,
        gender,
        bio,
        image,
        dob,
        occupation,
        country,
        city,
    }    
}
`;

// Info for detail WishlistItem
export const GET_FAMILYMEMBERS_INCLUDED_IN_WISHLISTITEM_BY_ID = gql`
query getFamilyMembersFromWishListItem($id: Int!) {
    findFamilyMembersInvolvedInWishListItem(whisListId: $id) {
        id
        familyMemberId
        familyMember {
            id
            firstname
        }
    }    
}
`;





// AgendaItems by FamilyMemberId
export const GET_AGENDAITEMS_BY_AUTHORID = gql`
query getAgendaItemsByAuthor($id: Int!) {
    agendaItemsByAuthor(authorId: $id) {
        id
        title
    }    
}
`;


export const GET_ALL_FAMILYMEMBERS = gql`
query {
    familyMembers {
      id
      firstname
      lastname
      gender
      isAlive
      bio
      isSender
    }
  }  
`;

export const GET_FAMILYMEMBER_BY_USERID = gql`
query getFamilyMemberByUserId($id: Int!){
    familyMemberByUserId(userId: $id) {
        id
        firstname
        lastname
        gender
        isAlive
        bio
        isSender
    }
  }
`;

export const GET_FAMILYMEMBER_BY_ID = gql`
query getFamilyMemberById($id: Int!){
    familyMemberById(id: $id) {
      id
      firstname
      lastname
      gender
      isAlive
      bio
      isSender
      image
      dob
      city
      country
      occupation
    }
  }
  
`;

export const GET_AGENDAITEMS_BY_FAMILYMEMBER_ID = gql`
query getFamilyMemberById($id: Int!) {
    familyMemberById(id: $id) {
        id
        agendaItems {
            id
            title
            date
        }

    }
}
`
export const GET_WISHLISTITEMS_BY_FAMILYMEMBER_ID = gql`
query getFamilyMemberById($id: Int!) {
    familyMemberById(id: $id) {
        id
        wishListItems {
            id
            content
            completed
            dueDate
        }
    }
}
`

export const GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID = gql`
query getFamilyRelationsByFamilyMemberId($id: Int!){
    familyRelationsByFamilyMemberId(familyMemberId: $id) {
      id
      relationType {
        name
      }
      relatedFamilyMember {
        id
        firstname
        lastname
        image
      }
    }
  }
`  