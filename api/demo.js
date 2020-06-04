const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

// 1. Create Query Type in the Schema using SDL
    // Add fields to the Query Type
const typeDefs = gql `
    type User {
        email: String! # the ! means not nullable 
        avatar: String
        friends: [User!]! # this means that the friends must always be an array and also must have user inside 
    }

    # query type is always necessary
        # A type on a Schema that defines operations clients can perform to access data that resembles the shape of the other Types in the Schema.
    type Query {
        me: User!
    }
`

// 2. Create Resolvers for the fields
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