import { Router } from 'express';

const routes = Router();

routes.get('/api/user', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default routes;