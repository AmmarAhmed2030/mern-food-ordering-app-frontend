import { MenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

export default function MenuItemComponent({ menuItem, addToCart }: Props) {
  return (
    <Card className="cursor-pointer">
      <div className="flex flex-col items-center gap-5 md:flex-row justify-between px-5 ">
        <div>
          <CardHeader>
            <CardTitle>{menuItem.name}</CardTitle>
          </CardHeader>
          <CardContent className="font-bold">
            ${(menuItem.price / 100).toFixed(2)}
          </CardContent>
        </div>
        <div>
          <Button onClick={addToCart}>Add To Cart</Button>
        </div>
      </div>
    </Card>
  );
}
