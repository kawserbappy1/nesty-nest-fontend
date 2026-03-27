import { Link, useLocation } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import { Badge } from "../ui/badge";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Book-Table", href: "/book-table" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-75 sm:w-full p-4">
        <div className="flex flex-col h-full">
          {/* Mobile Logo */}
          <div className="border-b pb-4 mb-4">
            <Logo />
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-3">
            {links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                    isActive ? "text-red-600" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Buttons */}
          <div className="mt-auto pt-6 border-t flex flex-col space-y-3">
            <Button variant="default" className="w-full relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              <Badge
                className="ml-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                variant="secondary"
              >
                0
              </Badge>
            </Button>
            <Button variant="outline" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
