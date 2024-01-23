import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { nav_links } from "@/constants";
import CustomizedButton from "./CustomizedButton";

interface NavigationBarProps {
  isVisible: boolean;
}

export default function NavigationBar({ isVisible }: NavigationBarProps) {
  return (
    <Navbar>
      <NavbarBrand>
        <Link
          className="font-bold text-start text-inherit"
          color="foreground"
          href="http://localhost:3000"
        >
          Import& Export
        </Link>
      </NavbarBrand>
      {isVisible ? (
        <>
          <NavbarContent className="hidden sm:flex gap-16" justify="center">
            {nav_links.map((item) => {
              return (
                <NavbarItem key={item.url}>
                  <Link color="foreground" href={item.url}>
                    {item.title}
                  </Link>
                </NavbarItem>
              );
            })}
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <CustomizedButton
                title="Contact us"
                uri="http://localhost:3000/contact"
              />
            </NavbarItem>
          </NavbarContent>
        </>
      ) : (
        <></>
      )}
    </Navbar>
  );
}
