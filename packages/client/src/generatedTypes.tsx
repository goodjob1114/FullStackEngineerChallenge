// THIS IS A GENERATED FILE
import gql from "graphql-tag";
import * as ReactApolloHooks from "react-apollo";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
};

export type Review = {
  __typename?: "Review";
  id: Scalars["ID"];
  from: User;
  to: User;
  createdAt: Scalars["Date"];
  submittedAt?: Maybe<Scalars["Date"]>;
  feedback?: Maybe<Scalars["String"]>;
};

export enum Role {
  Admin = "ADMIN",
  Employee = "EMPLOYEE"
}

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  role: Role;
  createdAt: Scalars["Date"];
  /** Reviews from this user. */
  fromReviews: Array<Review>;
  /** Reviews to this user. */
  toReviews: Array<Review>;
};
export type GetUsersQueryVariables = {};

export type GetUsersQuery = { __typename?: "Query" } & {
  users: Array<
    { __typename?: "User" } & Pick<User, "id" | "name" | "email" | "createdAt">
  >;
};

export const GetUsersDocument = gql`
  query getUsers {
    users {
      id
      name
      email
      createdAt
    }
  }
`;

export function useGetUsersQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<GetUsersQueryVariables>
) {
  return ReactApolloHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    baseOptions
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
