import { Router, response, request } from "express";
import { getOrder, Order} from "./order.controler";
const routes = Router();

routes.get("/order", (req, res) => {
  console.log("Order send");
  const order = getOrder(Order);
  console.log(req.query.test);
  res.send(order)  
});

export default routes;
