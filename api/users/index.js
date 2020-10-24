const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const { buildFederatedSchema } = require('@apollo/federation');

const GraphqlDatetime = require('graphql-type-datetime');
const environment = require('dotenv');

const typeDefs = gql(importSchema("./queries/schema.graphql"));

environment.config();

const resolvers = {
    DateTime: GraphqlDatetime,
    ...require('./resolvers')
};

const schema = buildFederatedSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });

if(process.env.NODE_ENV === "dev") {
    server.listen({ port: process.env.PORT })
        .then(() => console.log("USER Service running at port: " + process.env.PORT ))
        .catch((ex) => console.log(ex.message))
}

module.exports = server;
