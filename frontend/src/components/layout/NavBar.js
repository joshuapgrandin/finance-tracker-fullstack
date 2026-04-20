import { useState } from "react";
import Logo from "./layout/Logo";
import NavButton from "./ui/NavButton";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="relative h-18 border-b-neutral-200 border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 ">
        <Logo />
        {/*DESKTOP MENU*/}
        <ul className="gap-6 text-sm items-center hidden sm:flex">
          <li>
            <a href="/features" className="hover:text-brand-600">
              Features
            </a>
          </li>
          <li>
            <a href="/pricing" className="hover:text-brand-600">
              Pricing
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-brand-600">
              About
            </a>
          </li>
          <li>
            <a href="login" className="hover:text-brand-600">
              Log in
            </a>
          </li>
          <NavButton text={"Get started"} />
        </ul>
        {/*MOBILE MENU*/}
        <div className="sm:hidden">
          <button onClick={() => setOpen(!isOpen)}>
            <Menu />
          </button>
          {isOpen && (
            <ul className="absolute top-full left-0 right-0 bg-gray-50 border-neutral-200 border shadow-md gap-2 text-sm sm:hidden flex flex-col p-0">
              <li>
                <a
                  href="/pricing"
                  onClick={() => setOpen(!isOpen)}
                  className="block px-6 py-4 hover:bg-neutral-200 transition w-full text-center"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  onClick={() => setOpen(!isOpen)}
                  className="block px-6 py-4 hover:bg-neutral-200 transition w-full text-center"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={() => setOpen(!isOpen)}
                  className="block px-6 py-4 hover:bg-neutral-200 transition w-full text-center"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  onClick={() => setOpen(!isOpen)}
                  className="block px-6 py-4 hover:bg-neutral-200 transition w-full text-center"
                >
                  Log in
                </a>
              </li>
              <li className="flex justify-center mb-4 mt-4">
                <NavButton text={"Get started"} />
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
