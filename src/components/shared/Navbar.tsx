import { ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { Button } from "../ui/button";
import { ModeToggle } from "../theming/mode-toggle";
import MobileMenu from "./MobileMenu"; // Import MobileMenu

const Navbar = () => {
  return (
    <nav className="static top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:flex">
            <NavLink />
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative">
              <ShoppingCart size={18} />
              <span className="absolute -top-3 -right-1 bg-primary text-white h-4 w-4 text-xs grid place-items-center rounded-full">
                0
              </span>
            </div>
            <div>
              <Button
                variant="outline"
                className="font-semibold cursor-pointer border border-primary/10 hidden sm:block"
              >
                Log in
              </Button>
            </div>
            <div>
              <ModeToggle />
            </div>
            {/* Mobile Menu Component */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
