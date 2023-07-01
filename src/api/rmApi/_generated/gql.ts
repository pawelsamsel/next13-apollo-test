/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query CharactersQuery {\n    \n    characters(page: 2, filter: { name: \"Morty\" }) {\n      info {\n        count\n      }\n      results {\n        created\n        name\n        image\n      }\n    }\n    location(id: 1) {\n      id\n    }\n    episodesByIds(ids: [1, 2]) {\n      id\n    }\n  }\n": types.CharactersQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CharactersQuery {\n    \n    characters(page: 2, filter: { name: \"Morty\" }) {\n      info {\n        count\n      }\n      results {\n        created\n        name\n        image\n      }\n    }\n    location(id: 1) {\n      id\n    }\n    episodesByIds(ids: [1, 2]) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query CharactersQuery {\n    \n    characters(page: 2, filter: { name: \"Morty\" }) {\n      info {\n        count\n      }\n      results {\n        created\n        name\n        image\n      }\n    }\n    location(id: 1) {\n      id\n    }\n    episodesByIds(ids: [1, 2]) {\n      id\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;