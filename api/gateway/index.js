const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const environment = require('dotenv');

environment.config();

const gateway = new ApolloGateway({
    serviceList: [
        { name: 'users', url: 'http://localhost:4001' },
    ],
});

const server = new ApolloServer({
    gateway,
    subscriptions: false,
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});