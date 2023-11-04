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
    <Navbar
      shouldHideOnScroll
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <img
          src="https://scontent.fbkk4-2.fna.fbcdn.net/v/t39.30808-6/293275629_338607041814474_253596453142259628_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHDfL016eYn05ISANplSo80RQ9HLD2ygntFD0csPbKCe8-xHNgbehkx5E14IyjPBgMG3gcn70u89V2jORcZ0x_8&_nc_ohc=GS7B0lgQEAQAX8hhDGf&_nc_zt=23&_nc_ht=scontent.fbkk4-2.fna&oh=00_AfAysn2LRZstHq20A_J047B89Wi61JPqRyN6GrAgv4XBQg&oe=6549FDC1"
          alt="Adisorn Picture"
          width="50"
          height="50"
          className="mx-1 p-1 rounded-full"
        ></img>
        <h1 className="gap-4 font-bold text-inherit">ADISORN</h1>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            ABOUT ME
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#">
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
    </Navbar>
  );
}
