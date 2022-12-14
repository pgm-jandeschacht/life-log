import { gql, useQuery, useLazyQuery } from "@apollo/client";

/**
 * All Family Relations related queries
 */

/**
 * Queries
 */

// Info for "My WishList"
export const GET_FAMILYRELATIONS_BY_FAMILYMEMBER_ID = gql`
query getFamilyRelationsByFamilyMemberId($id: Int!) {
  familyRelationsByFamilyMemberId(familyMemberId: $id) {
    id
    familyMember {
      id
      firstname
      lastname
      dob
    }
    relationType {
      id
      name
    }
    relatedFamilyMember {
      id
      firstname
      lastname
      dob
      image
    }
  }
}    
`;

// info for "My pictures"
export const GET_RELATEDFAMILYMEMBERS_BY_FAMILYMEMBER_ID = gql`
query getRelatedFamilyMembersByFamilyMemberId($id: Int!) {
  familyRelationsByFamilyMemberId(familyMemberId: $id) {
    id
    relatedFamilyMember {
      id
      firstname
      lastname
      dob
      image
    }
    hidePictures
  }
}    
`;

export const GET_RELATION_BY_FAMILYIDS = gql`
query getRelationByFamilyIds($familyMemberId: Int!, $relatedFamilyMemberId: Int!) {
  familyRelationsByRelatedAndFamilyMemberId(
    familyMemberId: $familyMemberId,
    relatedFamilyMemberId: $relatedFamilyMemberId
  ) {
    id
    relationType {
      id 
      name
    }
  }
}
`;
