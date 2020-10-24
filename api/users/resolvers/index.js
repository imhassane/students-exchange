const createUser = require("../use-cases/create-user");
const updateProfil = require("../use-cases/update-profil");
const updatePassword = require("../use-cases/update-password");
const updatePostalCode = require("../use-cases/update-postal-code");

module.exports = {
    Query: {},
    Mutation: {
        createUser,
        updateProfil,
        updatePassword,
        updatePostalCode
    }
};