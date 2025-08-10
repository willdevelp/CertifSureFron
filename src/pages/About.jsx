import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { motion } from 'framer-motion';

export default function About() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const teamMembers = [
        { initials: 'JD', name: 'John Doe', role: 'Fondateur & CEO', bio: 'Expert en sécurité numérique avec 15 ans d\'expérience' },
        { initials: 'JS', name: 'Jane Smith', role: 'Directrice Technique', bio: 'Spécialiste en blockchain et authentification digitale' },
        { initials: 'AM', name: 'Alex Martin', role: 'Responsable Clientèle', bio: 'Dédiée à votre satisfaction et expérience utilisateur' },
        { initials: 'TP', name: 'Thomas Perez', role: 'Lead Développeur', bio: 'Architecte de notre plateforme sécurisée' }
    ];

    const features = [
        { 
            icon: 'fas fa-shield-alt', 
            title: 'Sécurité Maximale', 
            description: 'Protection avancée avec chiffrement AES-256 et blockchain pour une vérification infalsifiable',
            color: 'bg-blue-100 text-[#2E86AB]'
        },
        { 
            icon: 'fas fa-bolt', 
            title: 'Vérification Instantanée', 
            description: 'Scan QR code avec résultats en moins de 0.5 seconde grâce à notre infrastructure optimisée',
            color: 'bg-purple-100 text-purple-600'
        },
        { 
            icon: 'fas fa-globe', 
            title: 'Accessibilité Globale', 
            description: 'Disponible 24/7 sur tous les appareils avec synchronisation en temps réel',
            color: 'bg-green-100 text-green-600'
        },
        { 
            icon: 'fas fa-chart-line', 
            title: 'Analytiques Avancés', 
            description: 'Tableaux de bord complets pour le suivi des certificats et vérifications',
            color: 'bg-amber-100 text-amber-600'
        },
        { 
            icon: 'fas fa-user-shield', 
            title: 'Gestion des Accès', 
            description: 'Contrôle granulaire des permissions avec authentification multi-facteurs',
            color: 'bg-red-100 text-red-600'
        },
        { 
            icon: 'fas fa-cloud-upload-alt', 
            title: 'Intégration Simple', 
            description: 'API RESTful pour une intégration transparente avec vos systèmes existants',
            color: 'bg-indigo-100 text-indigo-600'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <motion.section 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block bg-gradient-to-r from-[#2E86AB] to-[#4BB3FD] text-transparent bg-clip-text">
                        <h1 className="text-5xl font-bold mb-4">À propos de CertifSure</h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        La référence en matière de gestion et vérification de certificats digitaux sécurisés
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2E86AB] to-[#4BB3FD] rounded-full"></div>
                    </div>
                </motion.section>

                {/* Mission Section */}
                <motion.section 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-xl p-10 mb-16 border border-gray-100 relative overflow-hidden"
                >
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full opacity-30"></div>
                    <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-50 rounded-full opacity-30"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                            <span className="w-8 h-8 bg-[#2E86AB] rounded-full flex items-center justify-center text-white mr-4">
                                <i className="fas fa-bullseye text-sm"></i>
                            </span>
                            Notre Mission
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-6">
                            Chez CertifSure, nous transformons la gestion des certificats à travers une plateforme 
                            <span className="font-semibold text-[#2E86AB]"> sécurisée, transparente et innovante</span>. Notre solution 
                            combine les dernières technologies de chiffrement et de blockchain pour garantir 
                            l'authenticité inaltérable de chaque document.
                        </p>
                        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                            <h3 className="text-xl font-semibold text-[#2E86AB] mb-3">Notre Vision</h3>
                            <p className="text-gray-700">
                                Devenir le standard mondial de vérification de certificats, éliminant les fraudes 
                                et simplifiant les processus de validation pour les organisations et les particuliers.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Features Section */}
                <section className="mb-20">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Pourquoi choisir CertifSure</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Une plateforme conçue pour répondre aux besoins les plus exigeants en matière 
                            de gestion et vérification de certificats
                        </p>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-lg p-7 border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-5 text-2xl`}>
                                    <i className={feature.icon}></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <motion.section 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="bg-gradient-to-r from-[#2E86AB] to-[#4BB3FD] rounded-2xl p-10 text-white mb-16 shadow-xl"
                >
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold mb-2">10K+</div>
                            <div className="text-blue-100">Certificats vérifiés</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">99.9%</div>
                            <div className="text-blue-100">Taux de disponibilité</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">0</div>
                            <div className="text-blue-100">Incidents de sécurité</div>
                        </div>
                    </div>
                </motion.section>

                {/* Team Section */}
                <section className="mb-16">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Rencontrez notre équipe</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Des experts passionnés dédiés à la sécurité et à l'innovation
                        </p>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                            >
                                <div className="bg-gradient-to-r from-[#2E86AB] to-[#4BB3FD] h-3"></div>
                                <div className="p-6">
                                    <div className="w-24 h-24 bg-[#2E86AB] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-5">
                                        {member.initials}
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-gray-800 mb-1">{member.name}</h3>
                                    <p className="text-[#2E86AB] text-center font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-600 text-center text-sm">{member.bio}</p>
                                    <div className="flex justify-center mt-5 space-x-3">
                                        <a href="#" className="text-gray-400 hover:text-[#2E86AB] transition">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-[#2E86AB] transition">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-[#2E86AB] transition">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <motion.section 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="bg-white rounded-2xl shadow-xl p-12 text-center relative overflow-hidden mb-16"
                >
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full opacity-20"></div>
                    <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-50 rounded-full opacity-20"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Prêt à transformer votre gestion de certificats ?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Découvrez comment CertifSure peut sécuriser et simplifier vos processus dès aujourd'hui.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a 
                                href="/contact" 
                                className="px-8 py-4 bg-gradient-to-r from-[#2E86AB] to-[#4BB3FD] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                Demander une démo
                            </a>
                            <a 
                                href="/pricing" 
                                className="px-8 py-4 bg-white border-2 border-[#2E86AB] text-[#2E86AB] rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                            >
                                Voir nos offres
                            </a>
                        </div>
                    </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100"
                >
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contactez-nous</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <i className="fas fa-envelope text-[#2E86AB]"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <a href="mailto:contact@certifsure.com" className="text-[#2E86AB] hover:underline">contact@certifsure.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <i className="fas fa-phone text-[#2E86AB]"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Téléphone</h4>
                                        <a href="tel:+33123456789" className="text-[#2E86AB] hover:underline">+33 1 23 45 67 89</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <i className="fas fa-map-marker-alt text-[#2E86AB]"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Bureau</h4>
                                        <p className="text-gray-600">15 Rue de la Paix, 75002 Paris, France</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6">Envoyez-nous un message</h3>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Votre nom</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Votre email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-[#2E86AB] to-[#4BB3FD] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                                    Envoyer le message
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.section>
            </main>
            <Footer />
        </div>
    );
}