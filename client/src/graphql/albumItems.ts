import { gql, useQuery, useLazyQuery } from "@apollo/client";

/**
 * All Agenda Item related queries
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

export const GET_ALBUMITEMS_BY_FAMILYMEMBER_ID = gql`
query {
    albumItems {
        id
        date
    }
}
`

