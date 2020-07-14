"use strict";

const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const db = require("quick.db");

const runMiddleware = require("../../lib/run-middleware");

module.exports = async (req, res) => {
  try {
    await runMiddleware(req, res, bodyParser.json());

    if (req.method !== "POST") {
      res.status(404);
      return res.end();
    }

    const sessionId = uuidv4();

    const { host, username, password, port, databaseName } = req.body;

    db.set(sessionId, { host, username, password, port, databaseName });

    return res.send({
      connectionId: sessionId,
    });
  } catch (err) {
    res.status(500);
    res.send({ error: err });
    throw err;
  }
};
