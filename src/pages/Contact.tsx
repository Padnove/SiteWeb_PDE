import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Globe } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: "" });

        try {
            // Envoi via EmailJS ou service équivalent
            // Ici on utilise une approche avec un service de formulaire
            const response = await fetch("https://formspree.io/f/xykapaed", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    _to: "contact@padnove.com",
                    _subject: `Nouveau message de ${formData.name} - Padnove`
                }),
            });

            if (response.ok) {
                setStatus({
                    type: "success",
                    message: "Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais."
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
            } else {
                throw new Error("Erreur d'envoi");
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setStatus({
                type: "error",
                message: "Une erreur s'est produite. Veuillez nous contacter directement par email à contact@padnove.com"
            });
        } finally {
            setIsLoading(false);
        }
    };

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
                            Contactez-<span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>nous</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Une question ? Un projet ? Notre équipe est là pour vous répondre.
                        </p>
                    </div>
                </div>
            </section>

            {/* Formulaire et infos */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Colonne gauche - Informations */}
                        <div>
                            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Informations de contact
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                                            <p className="text-gray-600">(+228) 79965258</p>
                                            <p className="text-gray-600">(+228) 98815303 / 92113189</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                            <a href="mailto:contact@padnove.com" className="text-gray-600 hover:underline hover:text-[#FE6E0C]">
                                                contact@padnove.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Bureaux</h3>
                                            <p className="text-gray-600">📍 Lomé, Togo</p>
                                            <p className="text-gray-600">📍 Bénin</p>
                                            <p className="text-gray-600">📍 Madagascar</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}>
                                            <Clock className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                                            <p className="text-gray-600">Lundi - Vendredi : 8H - 18H</p>
                                            <p className="text-gray-600">Samedi : 8H30 - 14H30</p>
                                            <p className="text-gray-600">Support 24H/7 pour clients</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Carte simple */}
                                <div className="mt-8 p-4 bg-gray-100 rounded-xl">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600">Présent dans 3 pays</p>
                                            <p className="font-semibold text-gray-900">Afrique de l'Ouest & Afrique de l'Est</p>
                                        </div>
                                        <Globe className="w-8 h-8" style={{ color: "#00A9B8" }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Colonne droite - Formulaire */}
                        <div>
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Envoyez-nous un message
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Remplissez le formulaire et nous vous répondrons sous 24h.
                                </p>

                                {status.type && (
                                    <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${status.type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                                        {status.type === "success" ? (
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        )}
                                        <p className={`text-sm ${status.type === "success" ? "text-green-700" : "text-red-700"}`}>
                                            {status.message}
                                        </p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                                            placeholder="Jean Dupont"
                                            onFocus={(e) => e.currentTarget.style.borderColor = "#FE6E0C"}
                                            onBlur={(e) => e.currentTarget.style.borderColor = "#d1d5db"}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                                            placeholder="contact@exemple.com"
                                            onFocus={(e) => e.currentTarget.style.borderColor = "#FE6E0C"}
                                            onBlur={(e) => e.currentTarget.style.borderColor = "#d1d5db"}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Téléphone (optionnel)
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                                            placeholder="+228 XX XX XX XX"
                                            onFocus={(e) => e.currentTarget.style.borderColor = "#FE6E0C"}
                                            onBlur={(e) => e.currentTarget.style.borderColor = "#d1d5db"}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Sujet *
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                                            onFocus={(e) => e.currentTarget.style.borderColor = "#FE6E0C"}
                                            onBlur={(e) => e.currentTarget.style.borderColor = "#d1d5db"}
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="Devis">Demande de devis</option>
                                            <option value="Projet">Nouveau projet</option>
                                            <option value="Information">Demande d'information</option>
                                            <option value="Carrière">Candidature spontanée</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                                            placeholder="Décrivez votre projet ou votre demande..."
                                            onFocus={(e) => e.currentTarget.style.borderColor = "#FE6E0C"}
                                            onBlur={(e) => e.currentTarget.style.borderColor = "#d1d5db"}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                                        style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                                    >
                                        {isLoading ? (
                                            "Envoi en cours..."
                                        ) : (
                                            <>
                                                Envoyer le message
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter.
                                        Vos informations ne sont pas partagées avec des tiers.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-20" style={{ background: "linear-gradient(135deg, #0A1128, #1B263B)" }}>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Vous préférez un appel ?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Laissez-nous vos coordonnées et nous vous rappellerons dans les plus brefs délais.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+22879965258"
                            className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                            style={{ background: "linear-gradient(135deg, #FE6E0C, #00A9B8)" }}
                        >
                            <Phone className="w-4 h-4" />
                            Nous appeler
                        </a>
                        <Link
                            to="/careers"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                            style={{ border: "2px solid #00A9B8", color: "#00A9B8" }}
                        >
                            Rejoindre Padnove
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;