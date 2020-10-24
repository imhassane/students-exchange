const {Pool} = require('pg');

let pool = new Pool();

pool.on('error', (err, _client) => {
    console.log(err.message);
    // TODO: logging.
})

module.exports = {
    query: async (text, values) => {
        return await pool.query(text, values);
    }
};