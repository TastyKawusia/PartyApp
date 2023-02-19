import express from "express"

const app = express();

app.get('/', (request, response) => {
    response.send('Hello World!');
  });
  
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });