// THIS IS A GENERATED FILE
import gql from "graphql-tag";
import * as ReactApolloHooks from "@apollo/react-hooks";
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

export type Mutation = {
  __typename?: "Mutation";
  createEmployee: User;
  updateUser: User;
};

export type MutationCreateEmployeeArgs = {
  name: Scalars["String"];
  email: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  id: Scalars["ID"];
  input: UserInput;
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

export type UserInput = {
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
};
export type CreateEmployeeMutationVariables = {
  name: Scalars["String"];
  email: Scalars["String"];
};

export type CreateEmployeeMutation = { __typename?: "Mutation" } & {
  createEmployee: { __typename?: "User" } & Pick<
    User,
    "id" | "name" | "email" | "role" | "createdAt"
  >;
};

export type GetUsersQueryVariables = {};

export type GetUsersQuery = { __typename?: "Query" } & {
  users: Array<
    { __typename?: "User" } & Pick<
      User,
      "id" | "name" | "email" | "role" | "createdAt"
    >
  >;
};

export type UpdateUserMutationVariables = {
  id: Scalars["ID"];
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type UpdateUserMutation = { __typename?: "Mutation" } & {
  updateUser: { __typename?: "User" } & Pick<User, "id" | "name" | "email">;
};

export const CreateEmployeeDocument = gql`
  mutation createEmployee($name: String!, $email: String!) {
    createEmployee(name: $name, email: $email) {
      id
      name
      email
      role
      createdAt
    }
  }
`;

export function useCreateEmployeeMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreateEmployeeMutation,
    CreateEmployeeMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreateEmployeeMutation,
    CreateEmployeeMutationVariables
  >(CreateEmployeeDocument, baseOptions);
}
export type CreateEmployeeMutationHookResult = ReturnType<
  typeof useCreateEmployeeMutation
>;
export const GetUsersDocument = gql`
  query getUsers {
    users {
      id
      name
      email
      role
      createdAt
    }
  }
`;

export function useGetUsersQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    baseOptions
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export const UpdateUserDocument = gql`
  mutation updateUser($id: ID!, $email: String, $name: String) {
    updateUser(id: $id, input: { email: $email, name: $name }) {
      id
      name
      email
    }
  }
`;

export function useUpdateUserMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UpdateUserDocument, baseOptions);
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
