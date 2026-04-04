"use client";

import { useState, useEffect } from "react";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [theme, setTheme] = useState("light");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            if (savedTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", newTheme);
    };

    return (
        <nav className="navbar relative flex justify-between items-center p-4">
            <div className="nav-brand">
                <h2 className="font-bold text-xl tracking-tight">Portfolio</h2>
            </div>

            {/* Desktop Navigation */}
            <ul className="nav-menu hidden md:flex gap-6 items-center font-medium opacity-80">
                <li><a href="#home" className="hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="#about" className="hover:opacity-100 transition-opacity">About</a></li>
                <li><a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a></li>
                <li><a href="#blog" className="hover:opacity-100 transition-opacity">Blog</a></li>
                <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>

            <div className="flex items-center gap-4">
                <a 
                    href="https://checkout.dodopayments.com/buy/..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 bg-[#FFDD00] text-black px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform shadow-sm"
                >
                    <FaCoffee />
                    Buy me a coffee
                </a>

                {/* Theme Button */}
                <button
                    onClick={toggleTheme}
                    className="border border-foreground/20 px-3 py-1 rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors"
                >
                    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden p-2 text-foreground/80 hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-foreground/10 px-4 py-6 flex flex-col gap-6 shadow-xl z-50">
                    <ul className="flex flex-col gap-6 font-medium text-lg text-center">
                        <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                        <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
                        <li><a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>
                        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
                    </ul>
                    
                    <a 
                        href="https://checkout.dodopayments.com/buy/..." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="sm:hidden flex justify-center items-center gap-2 bg-[#FFDD00] text-black px-4 py-3 rounded-full font-semibold hover:scale-105 transition-transform mx-auto w-full max-w-xs shadow-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <FaCoffee />
                        Buy me a coffee
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;