import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './user.routing';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});
routes.use("/api/user",)  // Something like that? How to connect user.routing with index
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});