import { gql } from "@apollo/client/core";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

const GET_POKEMON_ON_SINGLE_PAGE = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      height
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }

      abilities {
        ability {
          name
        }
      }
      species {
        url
      }

      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;

export { GET_POKEMONS, GET_POKEMON, GET_POKEMON_ON_SINGLE_PAGE };
