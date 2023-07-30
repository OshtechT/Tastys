/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBurgers = /* GraphQL */ `
  query GetBurgers($id: ID!) {
    getBurgers(id: $id) {
      id
      title
      price
      description
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBurgers = /* GraphQL */ `
  query ListBurgers(
    $filter: ModelBurgersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBurgers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBurgers = /* GraphQL */ `
  query SyncBurgers(
    $filter: ModelBurgersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBurgers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        price
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSide = /* GraphQL */ `
  query GetSide($id: ID!) {
    getSide(id: $id) {
      id
      title
      price
      description
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSides = /* GraphQL */ `
  query ListSides(
    $filter: ModelSideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSides = /* GraphQL */ `
  query SyncSides(
    $filter: ModelSideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        price
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDrinks = /* GraphQL */ `
  query GetDrinks($id: ID!) {
    getDrinks(id: $id) {
      id
      title
      price
      description
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDrinks = /* GraphQL */ `
  query ListDrinks(
    $filter: ModelDrinksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDrinks = /* GraphQL */ `
  query SyncDrinks(
    $filter: ModelDrinksFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDrinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        price
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDesserts = /* GraphQL */ `
  query GetDesserts($id: ID!) {
    getDesserts(id: $id) {
      id
      title
      price
      description
      image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDesserts = /* GraphQL */ `
  query ListDesserts(
    $filter: ModelDessertsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDesserts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDesserts = /* GraphQL */ `
  query SyncDesserts(
    $filter: ModelDessertsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDesserts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        price
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
