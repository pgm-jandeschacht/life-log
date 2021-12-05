import { gql, useQuery, useLazyQuery } from "@apollo/client";

/**
 * All Help Page related queries
 */

/**
 * Queries
 */

// Query by page Name
export const GET_HELP_PAGE_BY_NAME = gql`
query getHelpPageByName($name: String!) {
  helpPagesByPageName(pageName: $name) {
    id
    page
    step
    title
    text
    image
  }
}
`;
