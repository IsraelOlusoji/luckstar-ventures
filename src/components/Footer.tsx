import React from 'react';
import Image from 'next/image';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-navy border-t border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="lg:col-span-1">
                        <Image 
                            src="/luckstar_logo.png" 
                            alt="Luckstar Ventures Logo" 
                            width={180} 
                            height={48} 
                            className="h-12 w-auto object-contain mb-6 brightness-0 invert"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Delivering effectiveness, reliability, and innovation in comprehensive facility management and technical engineering solutions across Nigeria.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">Our Services</a></li>
                            <li><a href="#industries" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">Industries We Serve</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-brand-orange transition-colors duration-200 text-sm">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><span className="text-gray-400 text-sm">Facility Management</span></li>
                            <li><span className="text-gray-400 text-sm">Technical Engineering (MEP/HVAC)</span></li>
                            <li><span className="text-gray-400 text-sm">Property & Estate Support</span></li>
                            <li><span className="text-gray-400 text-sm">Real Estate Advisory</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact info</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400 text-sm">42 Durban Street</li>
                            <li className="text-gray-400 text-sm">Wuse II, Abuja, Nigeria</li>
                            <li className="mt-4">
                                <a href="tel:+2349166090168" className="text-brand-orange text-sm font-medium hover:underline">+234 916 609 0168</a>
                            </li>
                            <li>
                                <a href="mailto:info@luckstarventures.com" className="text-gray-400 text-sm hover:text-brand-orange transition-colors">info@luckstarventures.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Luckstar Ventures Limited. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
