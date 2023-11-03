import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ADISORN</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            ABOUT ME
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            CONTACTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            EDUCATIONS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            SKILLS
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
