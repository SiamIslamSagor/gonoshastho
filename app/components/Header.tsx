"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/app/components/ui/Button";
import { Button } from "@/app/components/ui/Button";

// Navigation links object
const navLinks = [
  { id: 1, name: "হোম", path: "/" },
  { id: 2, name: "আমাদের সম্পর্কে", path: "/about" },
  { id: 3, name: "সেবাসমূহ", path: "/services" },
  { id: 4, name: "চিকিৎসকগণ", path: "/doctors" },
  { id: 5, name: "যোগাযোগ", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="গণস্বাস্থ্য হোমিও"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.id}
                href={link.path}
                className="text-gray-800 hover:text-green-700 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Appointment Button */}
          <LinkButton
            href="/appointment"
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
          >
            Appointment
          </LinkButton>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden p-1 min-w-0 min-h-0 flex items-center justify-center"
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn">
            <nav className="flex flex-col">
              {navLinks.map(link => (
                <Link
                  key={link.id}
                  href={link.path}
                  className="px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <LinkButton
                href="/appointment"
                variant="primary"
                size="sm"
                className="m-4"
              >
                Appointment
              </LinkButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
