/**
 * All Familymembers related stuff
 */

import { gql } from "@apollo/client";

/**
 * Queries
 */

export const GET_ALL_FAMILYMEMBERS = gql`
query {
    familyMembers {
      id
      firstname
      father {firstname}
      notes {
        id
        content
      }
      agendaItems {
        id
        title
      }
    }
  }  
`;

export const GET_FAMILY_MEMBER_BY_ID =gql`
query getFamilyMember($id: Int{
    familyMemberById(id: $id) {
      firstname
      lastname
      notes {
        id
        content
      }
    }
  }
  
`;


// export const GET_NOTES = gql`
// `;