import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerS3object = {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
}

type LazyS3object = {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
}

export declare type S3object = LazyLoading extends LazyLoadingDisabled ? EagerS3object : LazyS3object

export declare const S3object: (new (init: ModelInit<S3object>) => S3object)

type Eagerburgers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<burgers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly image: S3object;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type Lazyburgers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<burgers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly image: S3object;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type burgers = LazyLoading extends LazyLoadingDisabled ? Eagerburgers : Lazyburgers

export declare const burgers: (new (init: ModelInit<burgers>) => burgers) & {
  copyOf(source: burgers, mutator: (draft: MutableModel<burgers>) => MutableModel<burgers> | void): burgers;
}

type Eagerside = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<side, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly image: S3object;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type Lazyside = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<side, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly image: S3object;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type side = LazyLoading extends LazyLoadingDisabled ? Eagerside : Lazyside

export declare const side: (new (init: ModelInit<side>) => side) & {
  copyOf(source: side, mutator: (draft: MutableModel<side>) => MutableModel<side> | void): side;
}

type Eagerdrinks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<drinks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly image: S3object;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type Lazydrinks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<drinks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly image: S3object;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type drinks = LazyLoading extends LazyLoadingDisabled ? Eagerdrinks : Lazydrinks

export declare const drinks: (new (init: ModelInit<drinks>) => drinks) & {
  copyOf(source: drinks, mutator: (draft: MutableModel<drinks>) => MutableModel<drinks> | void): drinks;
}

type Eagerdesserts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<desserts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly image: S3object;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type Lazydesserts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<desserts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly image: S3object;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type desserts = LazyLoading extends LazyLoadingDisabled ? Eagerdesserts : Lazydesserts

export declare const desserts: (new (init: ModelInit<desserts>) => desserts) & {
  copyOf(source: desserts, mutator: (draft: MutableModel<desserts>) => MutableModel<desserts> | void): desserts;
}