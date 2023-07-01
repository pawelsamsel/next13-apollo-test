import { gql } from "@/api/rmApi";

export const RM_CHARACTERS_QUERY = gql(`
  query CharactersQuery {
    
    characters(page: 2, filter: { name: "Morty" }) {
      info {
        count
      }
      results {
        created
        name
        image
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`);
