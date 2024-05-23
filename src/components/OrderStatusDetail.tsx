import { Order } from "@/types";
import { Separator } from "./ui/separator";

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
        <ul>
          {order.cartItems.map((cartItem, index) => (
            <li key={index}>
              {cartItem.name} ❎ {cartItem.quantity}
            </li>
          ))}
        </ul>
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
