import { Order } from "@/types";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { X } from "lucide-react";

type Props = {
  order: Order;
};
const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold py-3">Delivering to ⤵️⤵️</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}{" "}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold py-3">Your Order</span>
        <ScrollArea className="h-32 w-52 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {order.cartItems.map((cartItem, index) => (
              <>
                <div key={index} className="text-sm">
                  {cartItem.name} <X /> {cartItem.quantity}
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
      <Separator />
      <div className="flex flex-col">
        <span className="font-bold py-3">Total</span>
        <span>💲 {(order.totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
