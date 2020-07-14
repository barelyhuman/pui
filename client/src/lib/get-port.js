import querystring from "querystring";

export default () => {
  let query = querystring.parse(global.location.search);
  let port = JSON.parse(query["?port"]);
  return port;
};
