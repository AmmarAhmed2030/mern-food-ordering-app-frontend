import { Order } from "@/types";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { X } from "lucide-react";

type Props = {
  order: Order;
};
const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="flex flex-col">
      {" "}
      <div className="flex justify-between">
        <div className="flex flex-col w-full">
          <span className="font-bold py-3">Delivering to ⤵️⤵️</span>
          <span>{order.deliveryDetails.name}</span>
          <span>
            {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}{" "}
          </span>
        </div>
        <div className="flex flex-col ">
          <span className="font-bold py-3">Your Order</span>
          <ScrollArea className="h-36 w-60 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {order.cartItems.map((cartItem, index) => (
                <>
                  <div key={index} className="flex text-sm">
                    {cartItem.name} <X className="w-2 h-2 text-gray-500" />{" "}
                    {cartItem.quantity}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
          {/* <ul>
          {order.cartItems.map((cartItem, index) => (
            <li key={index}>
              {cartItem.name} ❎ {cartItem.quantity}
            </li>
          ))}
        </ul> */}
        </div>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span className="font-bold py-3">Total</span>
        <span>💲 {(order.totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
