import { Link } from "react-router-dom";
import { Send, Briefcase, Users, Award, TrendingUp, Heart, MapPin, Clock, CheckCircle, ChevronRight } from "lucide-react";

const Careers = () => {
    const positions = [
        {
            title: "Développeur Fullstack",
            type: "Stage/CDD/CDI/Freelance",
            location: "Télétravail/Remote/Présentiel (Togo, Bénin, Madagascar)",
            description: "Développement d'applications web et mobiles avec React, Node.js, Django,.. et technologies cloud."
        },
        {
            title: "Ingénieur IA / ML",
            type: "Stage/CDD/CDI/Freelance",
            location: "Télétravail/Remote/Présentiel (Togo, Bénin, Madagascar)",
            description: "Conception et déploiement de modèles d'intelligence artificielle pour des solutions innovantes."
        },
        {
            title: "UI/UX Designer",
            type: "Stage/CDD/CDI/Freelance",
            location: "Télétravail/Remote/Présentiel (Togo, Bénin, Madagascar)",
            description: "Création d'interfaces modernes et expériences utilisateur exceptionnelles."
        },
        {
            title: "Chef de projet digital",
            type: "Stage/CDD/CDI/Freelance",
            location: "Télétravail/Remote/Présentiel (Togo, Bénin, Madagascar)",
            description: "Coordination des équipes techniques et relation client pour la livraison des produits."
        },
        {
            title: "DevOps",
            type: "Stage/CDD/CDI/Freelance",
            location: "Télétravail/Remote/Présentiel (Togo, Bénin, Madagascar)",
            description: "Mise en place et maintenance de l'infrastructure cloud et des pipelines CI/CD."
        },
        {
            title: "Commercial B2B",
            type: "Stage/CDD/CDI/Freelance",
            location: "Télétravail/Remote/Présentiel (Togo, Bénin, Madagascar)",
            description: "Développement du portefeuille clients et prospection auprès des entreprises."
        }
    ];

    const benefits = [
        { icon: <TrendingUp className="w-5 h-5" />, title: "Évolution de carrière", desc: "Plan de développement personnalisé" },
        { icon: <Clock className="w-5 h-5" />, title: "Flexibilité", desc: "Télétravail et horaires adaptables" },
        { icon: <Award className="w-5 h-5" />, title: "Formation continue", desc: "Accès aux dernières technologies" },
        { icon: <Heart className="w-5 h-5" />, title: "Environnement stimulant", desc: "Équipe jeune et dynamique" }
    ];

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
                            Rejoignez <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>Padnove</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Construisons ensemble l'Afrique digitale de demain
                        </p>
                    </div>
                </div>
            </section>

            {/* Pourquoi nous rejoindre */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Pourquoi rejoindre <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>Padnove</span>
                        </h2>
                        <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></div>
                        <p className="text-gray-600 mt-6">
                            Nous offrons un cadre de travail exceptionnel pour les talents passionnés par l'innovation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                    <div className="text-white">{benefit.icon}</div>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-500 text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valeurs */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nos <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>valeurs</span>
                        </h2>
                        <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: "Innovation", icon: <TrendingUp className="w-4 h-4" /> },
                            { name: "Excellence", icon: <Award className="w-4 h-4" /> },
                            { name: "Impact local", icon: <MapPin className="w-4 h-4" /> },
                            { name: "Transparence", icon: <CheckCircle className="w-4 h-4" /> },
                            { name: "Collaboration", icon: <Users className="w-4 h-4" /> }
                        ].map((value) => (
                            <span
                                key={value.name}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                                style={{ background: "linear-gradient(135deg, rgba(254,110,12,0.1), rgba(0,169,184,0.1))", color: "#FE6E0C" }}
                            >
                                {value.icon}
                                {value.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Postes ouverts */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                            <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Postes <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>ouverts</span>
                        </h2>
                        <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></div>
                        <p className="text-gray-600 mt-6">
                            Découvrez les opportunités et rejoignez une équipe passionnée
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {positions.map((position) => (
                            <div
                                key={position.title}
                                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-gray-900">{position.title}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(254,110,12,0.1)", color: "#FE6E0C" }}>
                                        {position.type}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm mb-2 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {position.location}
                                </p>
                                <p className="text-gray-600 text-sm mb-4">{position.description}</p>
                                <button
                                    onClick={() => window.location.href = "mailto:contact@padnove.com?subject=Candidature%20-%20" + encodeURIComponent(position.title)}
                                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                                    style={{ color: "#FE6E0C" }}
                                >
                                    Postuler
                                    <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comment postuler */}
            <section className="py-20" style={{ background: "linear-gradient(135deg, #0A1128, #1B263B)" }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Comment <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>postuler</span>
                            </h2>
                            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}></div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                {[
                                    { step: "1", title: "Envoyez votre CV et Lettre de Motivation", desc: "à contact@padnove.com" },
                                    { step: "2", title: "Entretien", desc: "Échange avec notre équipe" },
                                    { step: "3", title: "Onboarding", desc: "Intégration et formation" }
                                ].map((step) => (
                                    <div key={step.step} className="text-center">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                            <span className="text-white font-bold text-lg">{step.step}</span>
                                        </div>
                                        <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                                        <p className="text-gray-400 text-sm">{step.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center p-6 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(254,110,12,0.1), rgba(0,169,184,0.1))" }}>
                                <p className="text-gray-200 text-lg mb-4">
                                    📧 Envoyez votre CV à :
                                    <a href="mailto:contact@padnove.com" className="font-bold ml-2 hover:underline" style={{ color: "#FE6E0C" }}>
                                        contact@padnove.com
                                    </a>
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Précisez votre domaine de compétence (IA, dev web/mobile, SaaS, design, etc.)
                                    et rejoignez une équipe innovante implantée au Togo, Bénin et Madagascar.
                                </p>
                            </div>

                            <div className="mt-8 flex justify-center">
                                <a
                                    href="mailto:contact@padnove.com"
                                    className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                                    style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                                >
                                    <Send className="w-4 h-4" />
                                    Envoyer ma candidature
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Vous avez un profil atypique ?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Nous sommes toujours ouverts aux talents passionnés. Envoyez-nous votre candidature spontanée.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                    >
                        Contactez-nous
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Careers;