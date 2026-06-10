import { Link } from "react-router-dom";
import { ChevronRight, Briefcase, Smartphone, Cpu } from "lucide-react";

const Home = () => {
    return (
        <div>
            {/* Hero Section - avec les couleurs Padnove */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Arrière-plan dynamique avec les vraies couleurs */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#0D1B2A] to-[#1B263B]"></div>

                {/* Effet de particules/orbes avec les couleurs Padnove */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: "#FE6E0C" }}></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "#00A9B8" }}></div>
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl" style={{ background: "#FE6E0C", opacity: 0.5 }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Logo avec animation et couleurs officielles */}
                        {/* <div className="mb-8 animate-pulse">
                            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                                <span className="text-white">PAD</span>
                                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                    NOVE
                                </span>
                            </h1>
                        </div> */}

                        {/* Slogan avec couleur orange */}
                        {/* <p className="text-lg md:text-xl tracking-wider mb-6 font-light" style={{ color: "#FE6E0C" }}>
                            SHAPING TOMORROW. INSPIRING TODAY.
                        </p> */}

                        {/* Titre principal */}
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            La technologie <br />
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                au service de l'Afrique
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                            Padnove conçoit des solutions digitales innovantes et adaptées aux réalités africaines.
                            IA, applications web/mobile, logiciels SaaS — pour les TPE, PME et grandes entreprises.
                        </p>

                        {/* Boutons CTA avec couleurs Padnove */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="group text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                                style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                            >
                                Commencer un projet
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                            </Link>
                            <Link
                                to="/projects"
                                className="border-2 px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                                style={{ borderColor: "#00A9B8", color: "#00A9B8" }}
                            >
                                Voir nos réalisations
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10">
                            {[
                                { value: "3+", label: "produits réalisés" },
                                { value: "3", label: "Pays (Togo, Bénin, Madagascar)" },
                                { value: "100%", label: "Solutions sur mesure" },
                                { value: "24/7", label: "Support client" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Services avec couleurs Padnove */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: "#FE6E0C" }}>Notre expertise</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Des solutions digitales complètes
                        </h2>
                        <p className="text-gray-600">
                            Nous accompagnons votre transformation digitale avec des technologies de pointe
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Cpu className="w-10 h-10" style={{ color: "#FE6E0C" }} />,
                                title: "Intelligence Artificielle",
                                desc: "Solutions IA sur mesure : machine learning, vision par ordinateur, NLP, et automatisation intelligente.",
                            },
                            {
                                icon: <Smartphone className="w-10 h-10" style={{ color: "#00A9B8" }} />,
                                title: "Apps Web & Mobile",
                                desc: "Applications performantes, responsives et sécurisées pour web, iOS et Android.",
                            },
                            {
                                icon: <Briefcase className="w-10 h-10" style={{ color: "#FE6E0C" }} />,
                                title: "Logiciels & SaaS",
                                desc: "Plateformes SaaS évolutives et logiciels de gestion adaptés aux entreprises africaines.",
                            },
                        ].map((service) => (
                            <div
                                key={service.title}
                                className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="mb-5">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                <div className="mt-6">
                                    <span className="text-sm font-semibold group-hover:underline" style={{ color: "#FE6E0C" }}>
                                        En savoir plus →
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-flex items-center gap-2 text-gray-700 font-semibold transition hover:text-[#FE6E0C]">
                            Découvrir tous nos services
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section produits phares */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: "#FE6E0C" }}>Nos réalisations</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            produits qui font la différence
                        </h2>
                        <p className="text-gray-600">
                            Découvrez comment Padnove transforme les idées en solutions concrètes
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "G-Connex",
                                desc: "Plateforme web pour le secteur agro-pastoral",
                                tech: "Web App",
                                link: "https://www.g-connex.com",
                            },
                            {
                                name: "Geyris",
                                desc: "Logiciel de gestion basé sur l'IA adapté aux TPE/PME africaines",
                                tech: "IA + Logiciel SaaS",
                                link: "https://www.geyris.com",
                            },
                            {
                                name: "KampField",
                                desc: "Plateforme emploi pour étudiants et entreprises",
                                tech: "Web App",
                                link: "https://www.kampfield.com",
                            },
                        ].map((project) => (
                            <div
                                key={project.name}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="h-48 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                                            {project.tech}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                                    <p className="text-gray-600 mb-4">{project.desc}</p>
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-semibold hover:underline inline-flex items-center gap-1"
                                            style={{ color: "#FE6E0C" }}
                                        >
                                            Voir le projet →
                                        </a>
                                    ) : (
                                        <span className="text-gray-400 text-sm">En savoir plus bientôt</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full transition hover:shadow-lg"
                            style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                        >
                            Voir tous nos produits
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section CTA finale avec couleurs Padnove */}
            <section className="py-20" style={{ background: "linear-gradient(135deg, #0A1128, #1B263B)" }}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Prêt à donner vie à votre projet ?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Discutons de vos besoins et construisons ensemble la solution digitale qui vous ressemble.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                    >
                        Contactez-nous
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;