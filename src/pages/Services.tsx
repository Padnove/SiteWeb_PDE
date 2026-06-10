import { Link } from "react-router-dom";
import { ChevronRight, Cpu, Smartphone, Laptop, Cloud, Rocket, PenTool, CheckCircle } from "lucide-react";

const Services = () => {
    const services = [
        {
            title: "Développement d'Intelligence Artificielle",
            description: "Solutions IA sur mesure : machine learning, deep learning, vision par ordinateur, NLP et automatisation intelligente des processus.",
            icon: <Cpu className="w-8 h-8" />,
            features: ["Machine Learning", "Computer Vision", "NLP", "Automatisation"]
        },
        {
            title: "Applications web / mobiles",
            description: "Création d'applications performantes, responsives et sécurisées pour web, iOS et Android avec les dernières technologies.",
            icon: <Smartphone className="w-8 h-8" />,
            features: ["React/React Native", "Flutter", "PWA", "UI/UX optimisé"]
        },
        {
            title: "Logiciels sur mesure",
            description: "Développement de logiciels adaptés spécifiquement à vos besoins métier et à vos processus internes.",
            icon: <Laptop className="w-8 h-8" />,
            features: ["ERP sur mesure", "CRM personnalisé", "Gestion de stock", "Dashboard analytics"]
        },
        {
            title: "SaaS (Software as a Service)",
            description: "Plateformes SaaS évolutives, sécurisées et prêtes à l'emploi avec abonnement flexible pour vos clients.",
            icon: <Cloud className="w-8 h-8" />,
            features: ["Architecture cloud", "Multi-tenant", "API RESTful", "Scalabilité"]
        },
        {
            title: "Accompagnement numérique",
            description: "Conseil et accompagnement des startups et entreprises dans leur transformation digitale et stratégie tech.",
            icon: <Rocket className="w-8 h-8" />,
            features: ["Audit technique", "Stratégie digitale", "Formation", "Maintenance"]
        },
        {
            title: "Padnove Design Excellence (PDE)",
            description: "Services de design premium : identité visuelle, UI/UX, design thinking et expérience utilisateur.",
            icon: <PenTool className="w-8 h-8" />,
            features: ["UI/UX Design", "Identité visuelle", "Prototypage", "Design system"]
        }
    ];

    return (
        <div>
            {/* Hero section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A1128, #1B263B)" }}></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: "#FE6E0C" }}></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "#00A9B8" }}></div>
                    <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full blur-3xl" style={{ background: "#FE6E0C", opacity: 0.3 }}></div>
                </div>
                <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Nos <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>services</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Des solutions digitales innovantes, adaptées à vos besoins et aux réalités africaines.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Bandeau coloré en haut */}
                                <div className="h-1.5" style={{ background: `linear-gradient(135deg, #FE6E0C, #00A9B8)` }}></div>

                                <div className="p-8">
                                    {/* Icône avec cercle */}
                                    <div
                                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                        style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                                    >
                                        <div className="text-white">
                                            {service.icon}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                                    {/* Features list */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {service.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-orange-50"
                                                style={{ color: "#FE6E0C", background: "rgba(254, 110, 12, 0.1)" }}
                                            >
                                                <CheckCircle className="w-3 h-3" />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Processus */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Notre <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>processus</span>
                        </h2>
                        <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></div>
                        <p className="text-gray-600 mt-6">
                            Une méthodologie éprouvée pour garantir la réussite de vos produits
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Analyse", desc: "Étude de vos besoins et objectifs" },
                            { step: "02", title: "Conception", desc: "Design et architecture de la solution" },
                            { step: "03", title: "Développement", desc: "Création et tests itératifs" },
                            { step: "04", title: "Déploiement", desc: "Mise en production et support" }
                        ].map((step) => (
                            <div key={step.step} className="text-center group">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                    <span className="text-white font-bold text-xl">{step.step}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section avantages */}
            <section className="py-20" style={{ background: "linear-gradient(135deg, #0A1128, #1B263B)" }}>
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Pourquoi <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>choisir Padnove</span>
                        </h2>
                        <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Expertise locale", desc: "Des solutions adaptées aux réalités et besoins du marché africain" },
                            { title: "Innovation continue", desc: "Veille technologique et adoption des dernières innovations" },
                            { title: "Support dédié", desc: "Accompagnement personnalisé et support 24/7" }
                        ].map((advantage) => (
                            <div key={advantage.title} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                                <p className="text-gray-400">{advantage.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Prêt à donner vie à votre projet ?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Discutons de vos besoins et trouvons ensemble la solution digitale qui vous correspond.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                    >
                        Demander un devis
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;