import gql from 'graphql-tag';

// Sign up
export const SignUp = gql`
    mutation SignUp($id: Int!, $name: String!, $provider: String!){
        SignUp(id: $id, name: $name, provider: $provider)
    }
`;