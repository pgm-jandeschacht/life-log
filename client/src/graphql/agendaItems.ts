import { gql, useQuery, useLazyQuery } from "@apollo/client";

/**
 * All Agenda Item related queries
 */

/**
 * Queries
 */

// Info for Home-page
export const GET_AGENDAITEMS_BY_FAMILYMEMBER_ID = gql`
query getAgendaItemsByFamilyMemberId($id: Int!) {
    agendaItemsByAuthor(authorId: $id) {
        id
        title
        date
    }    
}
`;
