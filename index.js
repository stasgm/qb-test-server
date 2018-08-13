//const fs = require('fs');
// const orm = require('gdmn-orm');
import { deserializeERModel } from 'gdmn-orm';
import fs from 'fs';

const dbFile = 'db.json'; // db.json

const data = fs.readFileSync(`./${dbFile}`, {encoding: "utf-8"});
const erModel = deserializeERModel(JSON.parse(data));

const entity = erModel.entities.GD_USER;
console.clear();
console.log(entity.name);
