import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "https://blogql-wmfkfmpzzk.now.sh"
});
export default client;