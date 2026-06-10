import { Link } from "react-router-dom";
// IMPORTANT : Ne pas importer Linkedin, Facebook ou MessageCircle depuis lucide-react
// On utilise uniquement les icônes qui existent vraiment
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Colonne 1 - Logo et description */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 group mb-3">
                            <div className="w-10 h-10 rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105 bg-gray-700 flex items-center justify-center">
                                <img
                                    src="/Images/logo.png"
                                    alt="Logo de Padnove"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                        if (target.parentElement) {
                                            target.parentElement.style.background = "linear-gradient(135deg, #FE6E0C, #00A9B8)";
                                            const span = document.createElement('span');
                                            span.textContent = 'P';
                                            span.className = 'text-white font-bold text-sm';
                                            target.parentElement.appendChild(span);
                                        }
                                    }}
                                />
                            </div>
                        </Link>
                        <p className="mt-2 text-gray-400 text-sm">SHAPING TOMORROW, INSPIRING TODAY</p>

                        {/* Réseaux sociaux */}
                        <div className="mt-4">
                            <p className="text-sm text-gray-400 mb-3">Suivez-nous</p>
                            <div className="flex gap-3">
                                {/* LinkedIn - Icône SVG inline */}
                                <a
                                    href="https://www.linkedin.com/company/padnove/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#0077B5]"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
                                    </svg>
                                </a>

                                {/* Facebook - Icône SVG inline */}
                                <a
                                    href="https://www.facebook.com/profile.php?id=61568314384162&mibextid=ZbWKwL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#1877F2]"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>

                                {/* WhatsApp - Icône SVG inline */}
                                <a
                                    href="https://wa.me/22879965258?text=Bonjour%20Padnove%2C%20je%20souhaite%20avoir%20plus%20d%27informations%20sur%20vos%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#25D366]"
                                    aria-label="WhatsApp"
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.031 1.995c-5.516 0-9.998 4.48-9.998 9.996 0 1.76.457 3.477 1.324 4.98L1.734 22.19l5.252-1.371c1.46.794 3.12 1.213 4.831 1.213 5.516 0 9.998-4.48 9.998-9.996s-4.482-9.996-9.998-9.996zm0 18.42c-1.605 0-3.184-.432-4.529-1.242l-.33-.195-3.144.822.841-3.059-.213-.337a7.962 7.962 0 01-1.312-4.408c0-4.417 3.595-8.012 8.012-8.012 2.14 0 4.152.833 5.664 2.344 1.513 1.513 2.344 3.525 2.344 5.664 0 4.417-3.595 8.012-8.012 8.012zm4.032-6.037c-.222-.111-1.313-.648-1.516-.722-.203-.074-.35-.111-.498.111-.148.222-.574.722-.703.87-.13.148-.259.167-.481.056-.222-.111-.937-.345-1.785-.999-.66-.509-1.104-1.139-1.233-1.331-.13-.193-.013-.297.097-.395.1-.088.222-.222.333-.333.111-.111.148-.185.222-.309.074-.124.037-.231-.019-.324-.055-.093-.498-1.199-.682-1.642-.18-.431-.362-.372-.498-.38-.13-.008-.278-.008-.426-.008-.148 0-.389.056-.593.278-.204.222-.78.762-.78 1.86 0 1.098.8 2.157.911 2.307.111.148 1.571 2.403 3.805 3.369.531.23 1.035.354 1.461.454.482.092.92.079 1.267.048.387-.035 1.191-.487 1.359-.957.167-.47.167-.873.117-.956-.05-.083-.185-.133-.407-.244z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Colonne 2 - Contact */}
                    <div>
                        <h4 className="font-semibold mb-3" style={{ color: "#FE6E0C" }}>Contact</h4>
                        <p className="text-gray-400 flex items-center gap-2">
                            <Phone className="w-4 h-4" style={{ color: "#FE6E0C" }} />
                            (+228) 79965258 / 98815303
                        </p>
                        <p className="text-gray-400 mt-2 flex items-center gap-2">
                            <Mail className="w-4 h-4" style={{ color: "#FE6E0C" }} />
                            contact@padnove.com
                        </p>
                    </div>

                    {/* Colonne 3 - Bureaux */}
                    <div>
                        <h4 className="font-semibold mb-3" style={{ color: "#FE6E0C" }}>Bureaux</h4>
                        <p className="text-gray-400 flex items-center gap-2">
                            <MapPin className="w-4 h-4" style={{ color: "#FE6E0C" }} />
                            Lomé, Togo
                        </p>
                        <p className="text-gray-400 mt-2 flex items-center gap-2">
                            <MapPin className="w-4 h-4" style={{ color: "#FE6E0C" }} />
                            Bénin / Madagascar
                        </p>
                    </div>

                    {/* Colonne 4 - Liens rapides */}
                    <div>
                        <h4 className="font-semibold mb-3" style={{ color: "#FE6E0C" }}>Liens rapides</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">À propos</Link></li>
                            <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Nos produits</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Contact</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Carrières</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
                    © 2026 Padnove - Tous droits réservés
                </div>
            </div>
        </footer>
    );
};

export default Footer;