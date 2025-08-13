import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "../components/ui/8bit/navigation-menu";
import { AnimatedThemeToggler } from "../components/magicui/animated-theme-toggler";

export default function NavbarComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <AnimatedThemeToggler />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
