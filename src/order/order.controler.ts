import { User, Johnny } from "../user/user.controler";

export type Order = {
  id: number;
  title: string;
  price: number;
  user: User;
};

export const Order: Order = { id: 1, title: "34", price: 200, user: Johnny };
export function getOrder(Order:Order) {
  console.log("Order returned");

  return Order;
}
