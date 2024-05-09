//import { Button } from "../../@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileNav() {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-600" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex items-center font-bold gap-2">
                {user?.picture ? (
                  <img src={user?.picture} alt=" " className="rounded-lg" />
                ) : (
                  <CircleUserRound className="text-orange-600" />
                )}
                {user?.name}
              </span>
            ) : (
              <span>Welcome to LunchEats</span>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <Button
                onClick={() => loginWithRedirect()}
                className="flex-1 font-bold bg-orange-600"
              >
                Log In
              </Button>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
