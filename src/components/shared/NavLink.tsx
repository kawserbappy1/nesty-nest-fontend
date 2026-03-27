import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

const NavLink = () => {
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
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link) => {
          const isActive = location.pathname === link.href;

          return (
            <NavigationMenuItem key={link.href}>
              <Link
                to={link.href}
                className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-500 ease-in-out hover:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  isActive ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLink;
