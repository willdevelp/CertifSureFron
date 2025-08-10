import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { FaPaperPlane, FaCheck, FaQrcode, FaShieldAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simuler l'envoi du formulaire
        setTimeout(() => {
            setSuccessMessage('Votre message a été envoyé avec succès !');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    // Animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const faqItems = [
        {
            question: "Comment fonctionne la vérification des certificats ?",
            answer: "Chaque certificat est doté d'un QR code unique qui permet de vérifier instantanément son authenticité. Il suffit de scanner le QR code avec votre smartphone pour accéder aux informations du certificat.",
            icon: <FaQrcode className="text-[#2E86AB] text-xl" />
        },
        {
            question: "Comment puis-je vérifier l'authenticité d'un certificat ?",
            answer: "Vous pouvez vérifier l'authenticité d'un certificat de deux façons : en scannant le QR code présent sur le document ou en entrant le numéro de référence unique dans notre système de vérification.",
            icon: <FaShieldAlt className="text-[#2E86AB] text-xl" />
        },
        {
            question: "Les certificats sont-ils sécurisés ?",
            answer: "Oui, tous les certificats sont stockés de manière sécurisée et cryptée. Chaque document possède un identifiant unique et ne peut être modifié une fois enregistré dans notre système.",
            icon: <FaShieldAlt className="text-[#2E86AB] text-xl" />
        },
        {
            question: "Comment puis-je obtenir de l'aide supplémentaire ?",
            answer: "Notre équipe de support est disponible pour vous aider. Vous pouvez nous contacter via ce formulaire, par email ou par téléphone.",
            icon: <FaPhoneAlt className="text-[#2E86AB] text-xl" />
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />
            
            <motion.main
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex-grow py-12 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.h1 
                        className="text-4xl font-bold text-center text-gray-900 mb-4"
                        variants={itemVariants}
                    >
                        Contactez Notre Équipe
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        Nous sommes là pour répondre à toutes vos questions sur nos services de certification.
                    </motion.p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Formulaire de contact */}
                        <motion.div 
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-xl overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-[#2E86AB] to-[#1B5299] p-6 text-white">
                                <h2 className="text-2xl font-bold">Envoyez-nous un message</h2>
                                <p className="text-blue-100">Nous vous répondrons dans les plus brefs délais</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                <motion.div whileHover={{ scale: 1.01 }}>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent transition-all"
                                        placeholder="Votre nom"
                                    />
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.01 }}>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Adresse email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent transition-all"
                                        placeholder="votre@email.com"
                                    />
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.01 }}>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Votre message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent transition-all"
                                        placeholder="Décrivez votre demande..."
                                    ></textarea>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-bold text-white transition-all ${
                                        isSubmitting 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-[#2E86AB] to-[#1B5299] hover:from-[#1B5299] hover:to-[#2E86AB] shadow-lg hover:shadow-xl'
                                    }`}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <FaCheck className="mr-2 animate-pulse" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="mr-2" />
                                            Envoyer le message
                                        </>
                                    )}
                                </motion.button>

                                {successMessage && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded"
                                    >
                                        <p>{successMessage}</p>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Section FAQ */}
                        <motion.div 
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-xl overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-[#2E86AB] to-[#1B5299] p-6 text-white">
                                <h2 className="text-2xl font-bold">Questions Fréquentes</h2>
                                <p className="text-blue-100">Trouvez des réponses aux questions les plus courantes</p>
                            </div>

                            <div className="p-8 space-y-8">
                                {faqItems.map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        whileHover={{ y: -2 }}
                                        className="border-b border-gray-200 pb-6 last:border-0"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="mt-1">{item.icon}</div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800">
                                                    {item.question}
                                                </h3>
                                                <p className="text-gray-600 mt-2">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                <div className="pt-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Autres moyens de contact</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <FaEnvelope className="text-[#2E86AB] text-xl" />
                                            <a href="mailto:support@certifsure.com" className="text-gray-600 hover:text-[#2E86AB] hover:underline">
                                                support@certifsure.com
                                            </a>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <FaPhoneAlt className="text-[#2E86AB] text-xl" />
                                            <span className="text-gray-600">+33 1 23 45 67 89</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.main>
            
            <Footer />
        </div>
    );
}