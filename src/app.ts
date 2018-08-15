//const fs = require('fs');
// const orm = require('gdmn-orm');
import { deserializeERModel, EntityLink, EntityQuery, ERModel, Entity } from "gdmn-orm";
import fs from "fs";

/* const dbFile = "./src/db/db.json"; // db.json
const data = fs.readFileSync(`./${dbFile}`, { encoding: "utf-8" });
const erModel = deserializeERModel(JSON.parse(data)); */

const fetchData = async (): Promise<ERModel> => {
  const ermodelsURL = `http://localhost:8090`;
  const response = await fetch(ermodelsURL);
  if (!response.ok) throw new Error(response.statusText);
  const list: {
    entities: ERModel;
  } = await response.json();
  return list.entities;
};

console.clear();

let model = fetchData()
.then(entities => entities)
.catch(e => console.log(`Ошибка: ${e.message}`));

// const entity = erModel.entities.GD_USER;
// console.log(entity.name);

/* const el = EntityLink.inspectorToObject(erModel, {
  entity: "GD_USER",
  alias: "user",
  fields: [{attribute: 'NAME'}]
});
console.log(el);
 */

