"use strict";

var _gdmnOrm = require("gdmn-orm");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//const fs = require('fs');
// const orm = require('gdmn-orm');
var dbFile = "db.json"; // db.json
var data = _fs2.default.readFileSync("./" + dbFile, { encoding: "utf-8" });
var erModel = (0, _gdmnOrm.deserializeERModel)(JSON.parse(data));

console.clear();

//const entity = erModel.entities.GD_USER;
//console.log(entity.name);
inspectorToObject;

var el = _gdmnOrm.EntityLink.inspectorToObject(erModel, {
  entity: "GD_USER",
  alias: "user",
  fields: [{ attribute: 'NAME' }]
});

console.log(el);