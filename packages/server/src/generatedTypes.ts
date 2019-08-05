// THIS IS A GENERATED FILE
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};

export type Mutation = {
  __typename?: "Mutation";
  readonly createEmployee: User;
  readonly updateUser: User;
  readonly createReview: Review;
};

export type MutationCreateEmployeeArgs = {
  name: Scalars["String"];
  email: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  id: Scalars["ID"];
  input: UserInput;
};

export type MutationCreateReviewArgs = {
  from: Scalars["ID"];
  to: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  readonly users: ReadonlyArray<User>;
  readonly reviews: ReadonlyArray<Review>;
};

export type Review = {
  __typename?: "Review";
  readonly id: Scalars["ID"];
  readonly from: User;
  readonly to: User;
  readonly createdAt: Scalars["Date"];
  readonly submittedAt?: Maybe<Scalars["Date"]>;
  readonly feedback?: Maybe<Scalars["String"]>;
};

export enum Role {
  Admin = "ADMIN",
  Employee = "EMPLOYEE"
}

export type User = {
  __typename?: "User";
  readonly id: Scalars["ID"];
  readonly name: Scalars["String"];
  readonly email: Scalars["String"];
  readonly role: Role;
  readonly createdAt: Scalars["Date"];
  /** Reviews from this user. */
  readonly fromReviews: ReadonlyArray<Review>;
  /** Reviews to this user. */
  readonly toReviews: ReadonlyArray<Review>;
};

export type UserInput = {
  readonly name?: Maybe<Scalars["String"]>;
  readonly email?: Maybe<Scalars["String"]>;
};
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Role: Role;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  Review: ResolverTypeWrapper<Review>;
  Mutation: ResolverTypeWrapper<{}>;
  UserInput: UserInput;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  User: User;
  ID: Scalars["ID"];
  String: Scalars["String"];
  Role: Role;
  Date: Scalars["Date"];
  Review: Review;
  Mutation: {};
  UserInput: UserInput;
  Boolean: Scalars["Boolean"];
}>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  createEmployee?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    MutationCreateEmployeeArgs
  >;
  updateUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    MutationUpdateUserArgs
  >;
  createReview?: Resolver<
    ResolversTypes["Review"],
    ParentType,
    ContextType,
    MutationCreateReviewArgs
  >;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Query"]
> = ResolversObject<{
  users?: Resolver<
    ReadonlyArray<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  reviews?: Resolver<
    ReadonlyArray<ResolversTypes["Review"]>,
    ParentType,
    ContextType
  >;
}>;

export type ReviewResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Review"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  from?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  to?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  submittedAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  feedback?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["User"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  role?: Resolver<ResolversTypes["Role"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  fromReviews?: Resolver<
    ReadonlyArray<ResolversTypes["Review"]>,
    ParentType,
    ContextType
  >;
  toReviews?: Resolver<
    ReadonlyArray<ResolversTypes["Review"]>,
    ParentType,
    ContextType
  >;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
