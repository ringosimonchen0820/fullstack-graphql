const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

const typeDefs = gql `
    type User {
        email: String! # the ! means not nullable 
        avatar: String
        friends: [User!]! # this means that the friends must always be an array and also must have user inside 
    }

    # query type is always necessary
    type Query {
        me: User!
    }
`

const resolvers = {
    Query: {
        me() {
            return {
                email: 'ringosimonchen0820!gmail.com',
                avatar: 'http://ringosimonchen0820.png',
                friends: []
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000)
    .then(() => console.log('on port 4000'))