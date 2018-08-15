import http from 'http';
import fs from 'fs';
// import db from './src/db/db.json';

const server: http.Server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const dbFile = "./src/db/db.json"; // db.json
  const data = fs.readFileSync(`./${dbFile}`, { encoding: "utf-8" });  

  res.write(JSON.stringify(data));
  // res.write('Тест');  
  res.end();
});

const port = 8090;
server.listen(port, () => {
  console.log(`Test server started on http://localhost:${port}`);
});
