/**
 * All Familymembers related stuff
 */

import { gql, useQuery, useLazyQuery } from "@apollo/client";

/**
 * Queries
 */

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
        firstname
        lastname
        image
      }
    }
  }
`  