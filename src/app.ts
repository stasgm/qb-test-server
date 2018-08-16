//const fs = require('fs');
// const orm = require('gdmn-orm');
import { deserializeERModel, EntityLink, EntityQuery, ERModel, Entity, Entities } from "gdmn-orm";
import fetch from 'node-fetch';

/* const dbFile = "./src/db/db.json"; // db.json
const data = fs.readFileSync(`./${dbFile}`, { encoding: "utf-8" });
const erModel = deserializeERModel(JSON.parse(data)); */

const fetchData = async (): Promise<ERModel> => {
  const ermodelsURL = `http://localhost:8090`;
  const response = await fetch(ermodelsURL);
  if (!response.ok) throw new Error(response.statusText);
  
  const model = await response.json();
  console.log(model.entities.GD_USER); 
  return model;
};

console.clear();

let a: Entities;

fetchData()
  .then(model => console.log(model.entity('GD_USER')))
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

