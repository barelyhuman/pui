"use strict";

const bodyParser = require("body-parser");
const db = require("quick.db");
const knex = require("knex");

const runMiddleware = require("../../../lib/run-middleware");

module.exports = async (req, res) => {
  try {
    await runMiddleware(req, res, bodyParser.json());

    if (req.method !== "POST") {
      res.status(404);
      return res.end();
    }

    const { connectionId, sqlQuery } = req.body;

    const connectionDetails = await db.get(connectionId);

    if (!sqlQuery) {
      res.status(400);
      return res.send({
        error: "Empty Queries not allowed",
      });
    }

    var dbConnection = knex({
      client: "pg",
      connection: {
        host: connectionDetails.host,
        user: connectionDetails.username,
        password: connectionDetails.password,
        database: connectionDetails.databaseName,
        port: connectionDetails.port,
      },
    });

    const data = await dbConnection.raw(`${sqlQuery}`);

    dbConnection.destroy();

    return res.send({
      data: data.rows,
    });
  } catch (err) {
    res.status(500);
    return res.send({ error: String(err) });
  }
};
