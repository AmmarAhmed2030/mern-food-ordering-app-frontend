import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import fake_user from "../assets/fake_user.png";
export default function UsernameMenu() {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange:600 gap-2">
        {user?.picture ? (
          <img
            src={user?.picture}
            alt=" "
            className="rounded-full w-10 h-10 hover:border-2
            hover:border-orange-600"
          />
        ) : (
          <img src={fake_user} alt="" className="rounded-full w-10 h-10" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-100 rounded-lg m-1 z-50">
        <DropdownMenuItem className="px-5 py-2 rounded-lg">
          <Link
            to="/manage-restaurant"
            className="font-bold hover:text-orange-600"
          >
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-5 py-2 rounded-lg">
          <Link to="/user-profile" className="font-bold hover:text-orange-600">
            User Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-5 py-2rounded-lg">
          <Link
            to="/order-status"
            className="font-bold hover:text-orange-600 hover:border-b-2 hover:border-b-orange-600"
          >
            Order Status
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="px-5 py-2 rounded-lg">
          <Button
            className="flex flex-1 font-bold bg-orange-600"
            onClick={() => logout()}
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
