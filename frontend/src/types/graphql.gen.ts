import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Customer = {
  __typename?: "Customer";
  email: Scalars["String"]["output"];
  first_name: Scalars["String"]["output"];
  id: Scalars["Float"]["output"];
  ip_address: Scalars["String"]["output"];
  last_name: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
};

export type FindCustomerDto = {
  id: Scalars["Float"]["input"];
};

export type FindProfileDto = {
  id: Scalars["Float"]["input"];
};

export type Profile = {
  __typename?: "Profile";
  id: Scalars["Float"]["output"];
  name: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  getCustomer: Customer;
  getProfile: Profile;
};

export type QuerygetCustomerArgs = {
  findCustomer: FindCustomerDto;
};

export type QuerygetProfileArgs = {
  findProfile: FindProfileDto;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Customer: ResolverTypeWrapper<Customer>;
  FindCustomerDto: FindCustomerDto;
  FindProfileDto: FindProfileDto;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  Profile: ResolverTypeWrapper<Profile>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  Customer: Customer;
  FindCustomerDto: FindCustomerDto;
  FindProfileDto: FindProfileDto;
  Float: Scalars["Float"]["output"];
  Profile: Profile;
  Query: {};
  String: Scalars["String"]["output"];
};

export type CustomerResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Customer"] = ResolversParentTypes["Customer"],
> = {
  email: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  first_name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  ip_address: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  last_name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  phone: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  username: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Profile"] = ResolversParentTypes["Profile"],
> = {
  id: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  getCustomer: Resolver<
    ResolversTypes["Customer"],
    ParentType,
    ContextType,
    RequireFields<QuerygetCustomerArgs, "findCustomer">
  >;
  getProfile: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<QuerygetProfileArgs, "findProfile">
  >;
};

export type Resolvers<ContextType = any> = {
  Customer: CustomerResolvers<ContextType>;
  Profile: ProfileResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
};
