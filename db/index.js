const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

function getMessages(request, response) {
  client.query("SELECT * FROM messages;", (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
    client.end();
  });
}

module.exports = {
  getMessages,
};
