import http from 'http';
// import db from './ ./db/db.json';

const server: http.Server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // res.write(JSON.stringify(db));
  res.write('Тест');  
  res.end();
});

const port = 8090;
server.listen(port, () => {
  console.log(`test server started on port ${port}`);
});
