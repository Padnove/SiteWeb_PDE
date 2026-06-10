import { Link } from "react-router-dom";
import { ExternalLink, ChevronRight, Cpu, Globe, GraduationCap } from "lucide-react";

const projects = [
    {
        name: "G-Connex",
        desc: "Plateforme web pour le secteur agro-pastoral",
        fullDesc: "Une solution digitale complète qui connecte les acteurs du secteur agro-pastoral, facilite la gestion des exploitations et optimise la chaîne de valeur agricole.",
        url: "https://www.g-connex.com",
        tech: ["Web App", "Agro-tech", "Data Analytics"],
        icon: <Globe className="w-8 h-8" />,
        color: "#FE6E0C"
    },
    {
        name: "Geyris",
        desc: "Logiciel de gestion basé sur l'IA adapté aux réalités africaines",
        fullDesc: "Une solution intelligente conçue pour les TPE, PME et commerces locaux africains. Automatisation, prédiction et optimisation des opérations grâce à l'IA.",
        url: "https://www.geyris.com",
        tech: ["IA", "SaaS", "Gestion d'entreprise"],
        icon: <Cpu className="w-8 h-8" />,
        color: "#00A9B8"
    },
    {
        name: "KampField",
        desc: "Plateforme emploi pour étudiants et entreprises",
        fullDesc: "Mettez en relation les étudiants à la recherche de stages, jobs étudiants et premiers emplois avec les entreprises qui recrutent des talents.",
        url: "https://www.kampfield.com",
        tech: ["Mobile", "Web", "Recrutement"],
        icon: <GraduationCap className="w-8 h-8" />,
        color: "#FE6E0C"
    },
];

const Projects = () => {
    return (
        <div>
            {/* Hero section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A1128, #1B263B)" }}></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: "#FE6E0C" }}></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "#00A9B8" }}></div>
                </div>
                <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Nos <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>produits</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Découvrez comment Padnove transforme les idées en solutions concrètes
                        </p>
                    </div>
                </div>
            </section>

            {/* Section produits */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.name}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Bandeau coloré en haut */}
                                <div className="h-2" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color === "#FE6E0C" ? "#00A9B8" : "#FE6E0C"})` }}></div>

                                <div className="p-8">
                                    {/* Icône avec cercle */}
                                    <div
                                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                        style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color === "#FE6E0C" ? "#00A9B8" : "#FE6E0C"})` }}
                                    >
                                        <div className="text-white">
                                            {project.icon}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h2>
                                    <p className="text-gray-600 mb-3 leading-relaxed">{project.desc}</p>
                                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.fullDesc}</p>

                                    {/* Tags technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-2 py-1 rounded-full"
                                                style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color === "#FE6E0C" ? "#00A9B8" : "#FE6E0C"}15)`, color: project.color }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Lien visit */}
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3"
                                            style={{ color: project.color }}
                                        >
                                            Voir le projet
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section statistiques */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "3+", label: "produits développés pour répondre aux besoins réels", icon: "" },
                            { value: "100%", label: "Nos clients sont satisfaits grâce à des solutions qui répondent à leurs besoins", icon: "" },
                            { value: "24/7", label: "Support technique", icon: "" },
                            { value: "10+", label: "Pays d'Afrique couverts", icon: "" }
                        ].map((stat) => (
                            <div key={stat.label} className="text-center group">
                                <div className="text-4xl mb-2 transition-all duration-300 group-hover:scale-110">{stat.icon}</div>
                                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "#FE6E0C" }}>{stat.value}</div>
                                <div className="text-gray-500 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-20" style={{ background: "linear-gradient(135deg, #0A1128, #1B263B)" }}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Vous avez un projet innovant ?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Transformons votre idée en réalité avec des solutions digitales sur mesure.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                    >
                        Discutons de votre projet
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Projects;