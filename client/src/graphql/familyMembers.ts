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
    }
  }
  
`;
