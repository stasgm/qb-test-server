//const fs = require('fs');
// const orm = require('gdmn-orm');
import { deserializeERModel, EntityLink, EntityQuery } from "gdmn-orm";
import fs from "fs";

const dbFile = "db.json"; // db.json
const data = fs.readFileSync(`./${dbFile}`, { encoding: "utf-8" });
const erModel = deserializeERModel(JSON.parse(data));

console.clear();

//const entity = erModel.entities.GD_USER;
//console.log(entity.name);

const el = EntityLink.inspectorToObject(erModel, {
  entity: "GD_USER",
  alias: "user",
  fields: [{attribute: 'NAME'}]
});

console.log(el);
