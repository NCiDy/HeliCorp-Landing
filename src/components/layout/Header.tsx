"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../commom/ThemeToggle";

const navLinks = [
    { label: "Tính năng nổi bật", href: "#features" },
    { label: "Thông số kỹ thuật", href: "#specifications" },
    { label: "Hướng dẫn sử dụng", href: "#usage-guide" },
    { label: "Đăng ký nhận tư vấn", href: "#newsletter" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                isScrolled ? "bg-stone-400 dark:bg-black/90 backdrop-blur-sm shadow-md" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

                {/* Logo */}
                <Link href="#top" className="shrink-0">
                    <Image
                        src="/images/helicorp-logo-white.webp"
                        alt="HELICORP"
                        priority
                        width={160}
                        height={26}
                        className = "w-[70px] h-auto md:w-[100px]"
                    />
                </Link>

                {/* Nav - desktop */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-xs md:text-lg text-white/80 hover:text-white transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center">
                <div className="mr-3 lg:mr-0">
                    <ThemeToggle />
                </div>
                {/* Button menu - mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Mở menu điều hướng"
                        aria-expanded={isMenuOpen}
                        className="lg:hidden text-white"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            {isMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu mobile - dropdown */}
            {isMenuOpen && (
                <nav className="lg:hidden bg-black/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white/80 hover:text-white transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}