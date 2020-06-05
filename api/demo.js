const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

// 1. Create Query Type in the Schema using SDL
//      Add fields to the Query Type
const typeDefs = gql `
    type User {
        email: String! # the ! means not nullable 
        avatar: String
        friends: [User!]! # this means that the friends must always be an array and also must have user inside 
    }

    # Query type:
    #     A type on a Schema that defines operations clients can perform to 
    #     access data that resembles the shape of the other Types 
    #     in the Schema.
    type Query {
        me: User!
    }
`

// 2. Create Resolvers for the fields
/*
    # resolvers: 
        Function that are responsible for returning values
        for fields that exist on Types in a Schema.
        Resolvers execution is dependent on the incoming
        client Query
    
    # creating resolvers:
        1.  Resolver names must match the exact field name on your Schema's Type
        2.  Resolvers must return the value type declared for the matching field
        3.  Resolvers can be async
        4.  Can retrieve data from any source
*/
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