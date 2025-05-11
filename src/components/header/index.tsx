import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";
import Image from "next/image";
import Logo from "/public/logo.svg";

import { LiaGamepadSolid } from "react-icons/lia";
import Link from "next/link";

export function Header() {
  return (
    <Navbar fluid>
      <Link href="/">
        <Image src={Logo} alt="" priority />
      </Link>
      <div className="flex md:order-2 gap-3 items-center">
        <LiaGamepadSolid className="text-2xl text-white" />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link
          className="block py-2 pl-3 text-[18px] pr-4 md:p-0 border-b border-gray-100  hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent !text-white"
          href="/profile"
        >
          Perfil
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
