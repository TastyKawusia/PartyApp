import { Router, response, request } from "express";
import {getUser} from "./user.controler";
const routes = Router();

routes.get("/user", (req, res) => {
  console.log("Somthing");
  console.log(req.query.test );

  res.send(getUser());

  
});

export default routes;
