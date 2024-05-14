import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
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
          <CircleUserRound className="text-orange-600" />
        )}
        <span className="text-orange-600 hover:border-b-2 p-b-2 hover:border-orange-600">
          {user?.name ? user.name : user?.email}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-2 border-orange-600 rounded-lg m-1">
        <DropdownMenuItem className="p-5 rounded-lg">
          <Link
            to="/manage-restaurant"
            className="font-bold hover:text-orange-600"
          >
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-5 rounded-lg">
          <Link to="/user-profile" className="font-bold hover:text-orange-600">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="p-5 rounded-lg">
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
