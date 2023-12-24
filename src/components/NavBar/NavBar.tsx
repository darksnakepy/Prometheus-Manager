import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "~/../public/logo.png";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

interface NavBarProps {
  onAccountClick?: () => void;
  isLogged: boolean;
  userName: string;
}

const NavBar = ({ onAccountClick, isLogged, userName }: NavBarProps) => {
  const [cookies, setCookies, removeCookies] = useCookies(["token", "email"]);
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full bg-[#181a1b] shadow-md text-white transition-colors duration-500">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center overflow-hidden">

        <Link href="/">
          <Image alt="logo" width="80" height="60" src={Logo} />
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex flex-row items-center gap-8 ml-auto">
          {isLogged ? (
            <Link href={"/"} className="hover:text-gray-300">
              {userName}
            </Link>
          ) : (
            <Link href={"/login"} className="hover:text-gray-300">
              Login
            </Link>
          )}
          <Link href={""} className="hover:text-gray-300">
            Features
          </Link>
          <Link href={""} className="hover:text-gray-300">
            Support
          </Link>
          {isLogged ? (
            <Link href={"/dashboard"} className="hover:text-gray-300">
              Dashboard
            </Link>
          ) : (
            <Link href={"/login"} className="hover:text-gray-300">
              Dashboard
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#1a1a1a] transition-opacity duration-500 opacity-90">
            {/* Close Button (X icon) */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center pt-16">
              <Link href={"/"} className="text-white py-2">
                Home
              </Link>
              <Link href={""} className="text-white py-2">
                Features
              </Link>
              <Link href={""} className="text-white py-2">
                Support
              </Link>
              {isLogged ? (
                <Link href={"/dashboard"} className="text-white py-2">
                  Dashboard
                </Link>
              ) : (
                <Link href={"/login"} className="text-white py-2">
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        )}

        {isLogged ? (
          <Image
            className="cursor-pointer ml-8 lg:hidden"
            src={"/exit.svg"}
            width={25}
            height={25}
            alt="logo"
            onClick={() => {
              removeCookies("token");
              removeCookies("email");
              router.reload();
            }}
          />
        ) : (
          <button className="ml-8 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#1545af] dark:hover:bg-blue-800 focus:outline-none lg:hidden transition-all duration-300">
            Sign up
          </button>
        )}
      </div>
    </div>
  )
}

export default NavBar
