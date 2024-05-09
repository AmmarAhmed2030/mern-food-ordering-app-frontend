import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLinks() {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        className="flex bg-white items-center font-bold hover:text-orange-600"
        to="/user-profile"
      >
        User Profile
      </Link>
      <Button
        className="flex items-center font-bold hover:text-orange-600 "
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </>
  );
}
