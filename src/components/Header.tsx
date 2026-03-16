"use client";

import React from 'react';
import Image from 'next/image';
import { Menu, Phone, X } from 'lucide-react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <Image 
                            src="/luckstar_logo.png" 
                            alt="Luckstar Ventures Logo" 
                            width={150} 
                            height={40} 
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-8 items-center">
                        <a href="#about" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">About</a>
                        <a href="#services" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Services</a>
                        <a href="#industries" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Industries</a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-md text-white bg-brand-orange hover:bg-orange-600 transition-colors shadow-sm"
                        >
                            Request Consultation
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-brand-orange focus:outline-none focus:text-brand-orange p-2"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-b border-gray-100 shadow-md">
                    <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
                        <a
                            href="#about"
                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-brand-light"
                            onClick={toggleMenu}
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-brand-light"
                            onClick={toggleMenu}
                        >
                            Services
                        </a>
                        <a
                            href="#industries"
                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-brand-light"
                            onClick={toggleMenu}
                        >
                            Industries
                        </a>
                        <div className="mt-4 px-3">
                            <a
                                href="#contact"
                                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-600"
                                onClick={toggleMenu}
                            >
                                Request Consultation
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
