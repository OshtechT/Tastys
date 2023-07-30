/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBurgersInput = {
  id?: string | null,
  title: string,
  price: number,
  description: string,
  image: S3objectInput,
  _version?: number | null,
};

export type S3objectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelBurgersConditionInput = {
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBurgersConditionInput | null > | null,
  or?: Array< ModelBurgersConditionInput | null > | null,
  not?: ModelBurgersConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type burgers = {
  __typename: "burgers",
  id: string,
  title: string,
  price: number,
  description: string,
  image: S3object,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type S3object = {
  __typename: "S3object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateBurgersInput = {
  id: string,
  title?: string | null,
  price?: number | null,
  description?: string | null,
  image?: S3objectInput | null,
  _version?: number | null,
};

export type DeleteBurgersInput = {
  id: string,
  _version?: number | null,
};

export type CreateSideInput = {
  id?: string | null,
  title: string,
  price: number,
  description: string,
  image: S3objectInput,
  _version?: number | null,
};

export type ModelSideConditionInput = {
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSideConditionInput | null > | null,
  or?: Array< ModelSideConditionInput | null > | null,
  not?: ModelSideConditionInput | null,
};

export type side = {
  __typename: "side",
  id: string,
  title: string,
  price: number,
  description: string,
  image: S3object,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSideInput = {
  id: string,
  title?: string | null,
  price?: number | null,
  description?: string | null,
  image?: S3objectInput | null,
  _version?: number | null,
};

export type DeleteSideInput = {
  id: string,
  _version?: number | null,
};

export type CreateDrinksInput = {
  id?: string | null,
  title: string,
  price: number,
  description: string,
  image: S3objectInput,
  _version?: number | null,
};

export type ModelDrinksConditionInput = {
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDrinksConditionInput | null > | null,
  or?: Array< ModelDrinksConditionInput | null > | null,
  not?: ModelDrinksConditionInput | null,
};

export type drinks = {
  __typename: "drinks",
  id: string,
  title: string,
  price: number,
  description: string,
  image: S3object,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDrinksInput = {
  id: string,
  title?: string | null,
  price?: number | null,
  description?: string | null,
  image?: S3objectInput | null,
  _version?: number | null,
};

export type DeleteDrinksInput = {
  id: string,
  _version?: number | null,
};

export type CreateDessertsInput = {
  id?: string | null,
  title: string,
  price: number,
  description: string,
  image: S3objectInput,
  _version?: number | null,
};

export type ModelDessertsConditionInput = {
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDessertsConditionInput | null > | null,
  or?: Array< ModelDessertsConditionInput | null > | null,
  not?: ModelDessertsConditionInput | null,
};

export type desserts = {
  __typename: "desserts",
  id: string,
  title: string,
  price: number,
  description: string,
  image: S3object,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDessertsInput = {
  id: string,
  title?: string | null,
  price?: number | null,
  description?: string | null,
  image?: S3objectInput | null,
  _version?: number | null,
};

export type DeleteDessertsInput = {
  id: string,
  _version?: number | null,
};

export type ModelBurgersFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBurgersFilterInput | null > | null,
  or?: Array< ModelBurgersFilterInput | null > | null,
  not?: ModelBurgersFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBurgersConnection = {
  __typename: "ModelBurgersConnection",
  items:  Array<burgers | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSideFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSideFilterInput | null > | null,
  or?: Array< ModelSideFilterInput | null > | null,
  not?: ModelSideFilterInput | null,
};

export type ModelSideConnection = {
  __typename: "ModelSideConnection",
  items:  Array<side | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDrinksFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDrinksFilterInput | null > | null,
  or?: Array< ModelDrinksFilterInput | null > | null,
  not?: ModelDrinksFilterInput | null,
};

export type ModelDrinksConnection = {
  __typename: "ModelDrinksConnection",
  items:  Array<drinks | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDessertsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDessertsFilterInput | null > | null,
  or?: Array< ModelDessertsFilterInput | null > | null,
  not?: ModelDessertsFilterInput | null,
};

export type ModelDessertsConnection = {
  __typename: "ModelDessertsConnection",
  items:  Array<desserts | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionBurgersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBurgersFilterInput | null > | null,
  or?: Array< ModelSubscriptionBurgersFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSideFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSideFilterInput | null > | null,
  or?: Array< ModelSubscriptionSideFilterInput | null > | null,
};

export type ModelSubscriptionDrinksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDrinksFilterInput | null > | null,
  or?: Array< ModelSubscriptionDrinksFilterInput | null > | null,
};

export type ModelSubscriptionDessertsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDessertsFilterInput | null > | null,
  or?: Array< ModelSubscriptionDessertsFilterInput | null > | null,
};

export type CreateBurgersMutationVariables = {
  input: CreateBurgersInput,
  condition?: ModelBurgersConditionInput | null,
};

export type CreateBurgersMutation = {
  createBurgers?:  {
    __typename: "burgers",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBurgersMutationVariables = {
  input: UpdateBurgersInput,
  condition?: ModelBurgersConditionInput | null,
};

export type UpdateBurgersMutation = {
  updateBurgers?:  {
    __typename: "burgers",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBurgersMutationVariables = {
  input: DeleteBurgersInput,
  condition?: ModelBurgersConditionInput | null,
};

export type DeleteBurgersMutation = {
  deleteBurgers?:  {
    __typename: "burgers",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSideMutationVariables = {
  input: CreateSideInput,
  condition?: ModelSideConditionInput | null,
};

export type CreateSideMutation = {
  createSide?:  {
    __typename: "side",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSideMutationVariables = {
  input: UpdateSideInput,
  condition?: ModelSideConditionInput | null,
};

export type UpdateSideMutation = {
  updateSide?:  {
    __typename: "side",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSideMutationVariables = {
  input: DeleteSideInput,
  condition?: ModelSideConditionInput | null,
};

export type DeleteSideMutation = {
  deleteSide?:  {
    __typename: "side",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDrinksMutationVariables = {
  input: CreateDrinksInput,
  condition?: ModelDrinksConditionInput | null,
};

export type CreateDrinksMutation = {
  createDrinks?:  {
    __typename: "drinks",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDrinksMutationVariables = {
  input: UpdateDrinksInput,
  condition?: ModelDrinksConditionInput | null,
};

export type UpdateDrinksMutation = {
  updateDrinks?:  {
    __typename: "drinks",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDrinksMutationVariables = {
  input: DeleteDrinksInput,
  condition?: ModelDrinksConditionInput | null,
};

export type DeleteDrinksMutation = {
  deleteDrinks?:  {
    __typename: "drinks",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDessertsMutationVariables = {
  input: CreateDessertsInput,
  condition?: ModelDessertsConditionInput | null,
};

export type CreateDessertsMutation = {
  createDesserts?:  {
    __typename: "desserts",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDessertsMutationVariables = {
  input: UpdateDessertsInput,
  condition?: ModelDessertsConditionInput | null,
};

export type UpdateDessertsMutation = {
  updateDesserts?:  {
    __typename: "desserts",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDessertsMutationVariables = {
  input: DeleteDessertsInput,
  condition?: ModelDessertsConditionInput | null,
};

export type DeleteDessertsMutation = {
  deleteDesserts?:  {
    __typename: "desserts",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetBurgersQueryVariables = {
  id: string,
};

export type GetBurgersQuery = {
  getBurgers?:  {
    __typename: "burgers",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBurgersQueryVariables = {
  filter?: ModelBurgersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBurgersQuery = {
  listBurgers?:  {
    __typename: "ModelBurgersConnection",
    items:  Array< {
      __typename: "burgers",
      id: string,
      title: string,
      price: number,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBurgersQueryVariables = {
  filter?: ModelBurgersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBurgersQuery = {
  syncBurgers?:  {
    __typename: "ModelBurgersConnection",
    items:  Array< {
      __typename: "burgers",
      id: string,
      title: string,
      price: number,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSideQueryVariables = {
  id: string,
};

export type GetSideQuery = {
  getSide?:  {
    __typename: "side",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSidesQueryVariables = {
  filter?: ModelSideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSidesQuery = {
  listSides?:  {
    __typename: "ModelSideConnection",
    items:  Array< {
      __typename: "side",
      id: string,
      title: string,
      price: number,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSidesQueryVariables = {
  filter?: ModelSideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSidesQuery = {
  syncSides?:  {
    __typename: "ModelSideConnection",
    items:  Array< {
      __typename: "side",
      id: string,
      title: string,
      price: number,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDrinksQueryVariables = {
  id: string,
};

export type GetDrinksQuery = {
  getDrinks?:  {
    __typename: "drinks",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDrinksQueryVariables = {
  filter?: ModelDrinksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDrinksQuery = {
  listDrinks?:  {
    __typename: "ModelDrinksConnection",
    items:  Array< {
      __typename: "drinks",
      id: string,
      title: string,
      price: number,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDrinksQueryVariables = {
  filter?: ModelDrinksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDrinksQuery = {
  syncDrinks?:  {
    __typename: "ModelDrinksConnection",
    items:  Array< {
      __typename: "drinks",
      id: string,
      title: string,
      price: number,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDessertsQueryVariables = {
  id: string,
};

export type GetDessertsQuery = {
  getDesserts?:  {
    __typename: "desserts",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDessertsQueryVariables = {
  filter?: ModelDessertsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDessertsQuery = {
  listDesserts?:  {
    __typename: "ModelDessertsConnection",
    items:  Array< {
      __typename: "desserts",
      id: string,
      title: string,
      price: number,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDessertsQueryVariables = {
  filter?: ModelDessertsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDessertsQuery = {
  syncDesserts?:  {
    __typename: "ModelDessertsConnection",
    items:  Array< {
      __typename: "desserts",
      id: string,
      title: string,
      price: number,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateBurgersSubscriptionVariables = {
  filter?: ModelSubscriptionBurgersFilterInput | null,
};

export type OnCreateBurgersSubscription = {
  onCreateBurgers?:  {
    __typename: "burgers",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBurgersSubscriptionVariables = {
  filter?: ModelSubscriptionBurgersFilterInput | null,
};

export type OnUpdateBurgersSubscription = {
  onUpdateBurgers?:  {
    __typename: "burgers",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBurgersSubscriptionVariables = {
  filter?: ModelSubscriptionBurgersFilterInput | null,
};

export type OnDeleteBurgersSubscription = {
  onDeleteBurgers?:  {
    __typename: "burgers",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSideSubscriptionVariables = {
  filter?: ModelSubscriptionSideFilterInput | null,
};

export type OnCreateSideSubscription = {
  onCreateSide?:  {
    __typename: "side",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSideSubscriptionVariables = {
  filter?: ModelSubscriptionSideFilterInput | null,
};

export type OnUpdateSideSubscription = {
  onUpdateSide?:  {
    __typename: "side",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSideSubscriptionVariables = {
  filter?: ModelSubscriptionSideFilterInput | null,
};

export type OnDeleteSideSubscription = {
  onDeleteSide?:  {
    __typename: "side",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDrinksSubscriptionVariables = {
  filter?: ModelSubscriptionDrinksFilterInput | null,
};

export type OnCreateDrinksSubscription = {
  onCreateDrinks?:  {
    __typename: "drinks",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDrinksSubscriptionVariables = {
  filter?: ModelSubscriptionDrinksFilterInput | null,
};

export type OnUpdateDrinksSubscription = {
  onUpdateDrinks?:  {
    __typename: "drinks",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDrinksSubscriptionVariables = {
  filter?: ModelSubscriptionDrinksFilterInput | null,
};

export type OnDeleteDrinksSubscription = {
  onDeleteDrinks?:  {
    __typename: "drinks",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDessertsSubscriptionVariables = {
  filter?: ModelSubscriptionDessertsFilterInput | null,
};

export type OnCreateDessertsSubscription = {
  onCreateDesserts?:  {
    __typename: "desserts",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDessertsSubscriptionVariables = {
  filter?: ModelSubscriptionDessertsFilterInput | null,
};

export type OnUpdateDessertsSubscription = {
  onUpdateDesserts?:  {
    __typename: "desserts",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDessertsSubscriptionVariables = {
  filter?: ModelSubscriptionDessertsFilterInput | null,
};

export type OnDeleteDessertsSubscription = {
  onDeleteDesserts?:  {
    __typename: "desserts",
    id: string,
    title: string,
    price: number,
    description: string,
    image:  {
      __typename: "S3object",
      bucket: string,
      region: string,
      key: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
