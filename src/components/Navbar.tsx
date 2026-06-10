import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Padnove avec dégradé */}
                <Link to="/" className="flex items-center gap-2 group">
                    {/* Logo image */}
                    <div className="w-10 h-10 rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105">
                        <img
                            src="/Images/logo.png"
                            alt="Logo de Padnove"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* <div>
                        <span className="text-2xl font-bold tracking-tight">
                            <span className="text-gray-900">PAD</span>
                            <span className="bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                NOVE
                            </span>
                        </span>
                        <p className="text-xs text-gray-500 hidden sm:block">Shaping Tomorrow. Inspiring Today.</p>
                    </div> */}
                </Link>

                {/* Navigation Desktop */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-gray-700 font-medium hover:transition-all duration-300 relative group">
                        Accueil
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                            style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></span>
                    </Link>
                    <Link to="/about" className="text-gray-700 font-medium hover:transition-all duration-300 relative group">
                        À propos
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                            style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></span>
                    </Link>
                    <Link to="/projects" className="text-gray-700 font-medium hover:transition-all duration-300 relative group">
                        Nos produits
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                            style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></span>
                    </Link>
                    <Link to="/services" className="text-gray-700 font-medium hover:transition-all duration-300 relative group">
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                            style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></span>
                    </Link>
                    <Link to="/contact" className="text-gray-700 font-medium hover:transition-all duration-300 relative group">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                            style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></span>
                    </Link>
                    <Link to="/careers" className="text-gray-700 font-medium hover:transition-all duration-300 relative group">
                        Carrières
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                            style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></span>
                    </Link>

                    {/* Bouton CTA dans la navbar */}
                    <Link
                        to="/contact"
                        className="px-5 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                    >
                        Devis gratuit
                    </Link>
                </div>

                {/* Bouton menu mobile */}
                <button
                    className="md:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="w-6 h-6" style={{ color: "#FE6E0C" }} />
                    ) : (
                        <Menu className="w-6 h-6" style={{ color: "#FE6E0C" }} />
                    )}
                </button>
            </div>

            {/* Navigation Mobile */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
                    <div className="flex flex-col space-y-1 p-4">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:text-white transition-all duration-300"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(135deg, #FE6E0C, #00A9B8)";
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#374151";
                            }}
                        >
                            Accueil
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:text-white transition-all duration-300"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(135deg, #FE6E0C, #00A9B8)";
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#374151";
                            }}
                        >
                            À propos
                        </Link>
                        <Link
                            to="/projects"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:text-white transition-all duration-300"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(135deg, #FE6E0C, #00A9B8)";
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#374151";
                            }}
                        >
                            Nos produits
                        </Link>
                        <Link
                            to="/services"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:text-white transition-all duration-300"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(135deg, #FE6E0C, #00A9B8)";
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#374151";
                            }}
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:text-white transition-all duration-300"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(135deg, #FE6E0C, #00A9B8)";
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#374151";
                            }}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/careers"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:text-white transition-all duration-300"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(135deg, #FE6E0C, #00A9B8)";
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#374151";
                            }}
                        >
                            Carrières
                        </Link>

                        {/* Bouton CTA mobile */}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 px-4 py-3 rounded-full text-white font-semibold text-center transition-all duration-300"
                            style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                        >
                            Demander un devis
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;