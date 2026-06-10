import { Link } from "react-router-dom";
import { Target, Globe, Users, Award, Zap, Shield, ChevronRight } from "lucide-react";

const About = () => {
    return (
        <div>
            {/* Hero section avec dégradé Padnove */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A1128, #1B263B)" }}></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: "#FE6E0C" }}></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "#00A9B8" }}></div>
                </div>
                <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            À propos de <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>Padnove</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            L'intelligence artificielle au service du développement africain
                        </p>
                    </div>
                </div>
            </section>

            {/* Notre mission - Version moderne */}
            <section className="py-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                        <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre mission</h2>
                    <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></div>
                    <p className="text-lg text-gray-600 mt-8 leading-relaxed">
                        Padnove est une entreprise spécialisée dans l'<strong className="text-gray-900">intelligence artificielle</strong> et le
                        <strong className="text-gray-900"> développement de solutions numériques innovantes</strong>. Notre mission est d'accompagner
                        les entreprises, startups et institutions africaines dans leur transformation digitale.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    {/* Expertise */}
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                            <Zap className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre expertise</h3>
                        <ul className="space-y-3 text-gray-600">
                            {[
                                "Intelligence Artificielle & Machine Learning",
                                "Applications web/mobiles performantes",
                                "Logiciels SaaS sur mesure",
                                "Padnove Design Excellence (PDE)",
                                "Accompagnement stratégique digital"
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FE6E0C" }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Vision Afrique */}
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #00A9B8, #FE6E0C)" }}>
                            <Globe className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision Afrique</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Nous concevons des solutions adaptées aux réalités locales : infrastructures variées,
                            usages spécifiques, et besoins uniques des TPE/PME africaines.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Avec des bureaux à <strong className="text-gray-900">Lomé (Togo)</strong>, <strong className="text-gray-900">Bénin</strong> et
                            <strong className="text-gray-900"> Madagascar</strong>, Padnove est votre partenaire digital de confiance.
                        </p>
                    </div>
                </div>

                {/* Valeurs */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                        <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Nos valeurs</h3>
                    <div className="w-20 h-1 mx-auto rounded-full mb-8" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: "Innovation", icon: <Zap className="w-4 h-4" /> },
                            { name: "Excellence", icon: <Award className="w-4 h-4" /> },
                            { name: "Impact local", icon: <Globe className="w-4 h-4" /> },
                            { name: "Transparence", icon: <Shield className="w-4 h-4" /> },
                            { name: "Agilité", icon: <Target className="w-4 h-4" /> }
                        ].map((val) => (
                            <span
                                key={val.name}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
                                style={{ background: "linear-gradient(135deg, rgba(254,110,12,0.1), rgba(0,169,184,0.1))", color: "#FE6E0C" }}
                            >
                                {val.icon}
                                {val.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Chiffres clés */}
            <section className="py-16" style={{ background: "linear-gradient(135deg, #0A1128, #1B263B)" }}>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "3+", label: "produits réalisés" },
                            { value: "10+", label: "Pays d'Afrique couverts" },
                            { value: "100%", label: "Clients satisfaits" },
                            { value: "24/7", label: "Support disponible" }
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#FE6E0C" }}>{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Vous avez un projet en tête ?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Discutons de la manière dont Padnove peut vous accompagner dans votre transformation digitale.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                    >
                        Nous contacter
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;