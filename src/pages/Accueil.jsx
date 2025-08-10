import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/confident-good-looking-outgoing-nice-dark-skinned-curly-haired-female-friend-suggesting-visit-cozy-cafe-pointing-sideways-inviting-come-smiling-broadly-friendly-vibe-holding-hand-waist-casually.jpg";
import image2 from "../assets/portrait-seriouslooking-determined-young-african-american-guy-with-bristle-cross-hands-chest-looking-confident-ready-action-starting-own-business-stand-white-background.jpg";
import image3 from "../assets/portrait-young-confident-serious-african-american-man-determined-guy-squinting-selfassured-staring-camera-professional-pose-cross-arms-chest-ready-help-white-background.jpg";
import image4 from "../assets/side-view-man-reading-menu-restaurant.jpg";
import image5 from "../assets/tp204-certificate-05.jpg";
import image6 from "../assets/tp204-certificate-14.jpg";
import image7 from "../assets/6976156.jpg";
import image8 from "../assets/grunge_certified_seal_stamp_rubber_look-fotor-bg-remover-20250408181512.png";
// import image9 from "../assets/a.png";
// import image10 from "../assets/a1.png";
// import image11 from "../assets/a2.png";
// import image12 from "../assets/a3.png";
// import image13 from "../assets/a4.png";
// import image14 from "../assets/a5.png";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { motion } from "framer-motion";
import { FaShieldAlt, FaQrcode, FaHashtag, FaChartLine, FaHandshake } from "react-icons/fa";

function Accueil() {
    const images = [image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const imagesCertif = [image5, image6, image7];
    const [currentIndexCertif, setCurrentIndexCertif] = useState(0);

    useEffect(() => {
        const intervalCertif = setInterval(() => {
            setCurrentIndexCertif((prevIndex) =>
                prevIndex === imagesCertif.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(intervalCertif);
    }, [imagesCertif.length]);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="bg-gray-50">
            <Header />
            
            {/* Hero Section */}
            <div className="lg:flex items-center justify-between bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-12 lg:py-24">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="space-y-8 lg:w-1/2 mb-10 lg:mb-0"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Certifiez vos Compétences avec <span className="text-yellow-300">Confiance</span>
                    </h1>
                    <p className="text-lg text-blue-100 leading-relaxed">
                        Accélérez votre organisation dans l'économie concurrentielle basée
                        sur les compétences. Délivrez des diplômes numériques qui
                        ajoutent de la valeur à l'apprentissage et préparez votre
                        personnel à l'avenir avec les compétences nécessaires.
                    </p>
                    <div className="flex space-x-4">
                        <Link to="/ref">
                            <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                                Vérifier un Document
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
                                Nous Contacter
                            </button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-96 w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl"
                >
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000"
                        style={{ opacity: 1 }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6">
                        <div className="flex justify-center space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-yellow-400' : 'bg-white bg-opacity-50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Verification Section */}
            <div className="lg:flex items-center justify-between space-x-8 w-full bg-white p-8 lg:p-16 shadow-md">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <motion.img 
                        src={image4} 
                        alt="Verification" 
                        className="rounded-xl shadow-xl w-full"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />
                </div>
                <motion.div 
                    className="lg:w-1/2 space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center space-x-3">
                        <FaShieldAlt className="text-blue-600 text-3xl" />
                        <h2 className="text-3xl font-bold text-gray-800">
                            Vérifiez l'authenticité de vos documents
                        </h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Garantissez la validité de vos attestations et certifications grâce à notre système de vérification sécurisé.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="#">
                            <motion.div 
                                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center space-x-3">
                                    <FaQrcode className="text-blue-600 text-2xl" />
                                    <h3 className="font-semibold text-gray-800">Scan QR Code</h3>
                                </div>
                                <p className="text-gray-600 mt-2 text-sm">Scannez le code QR sur votre certification pour vérifier votre certificats</p>
                            </motion.div>
                        </Link>
                        <Link to="/ref">
                            <motion.div 
                                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center space-x-3">
                                    <FaHashtag className="text-blue-600 text-2xl" />
                                    <h3 className="font-semibold text-gray-800">Numéro de Référence</h3>
                                </div>
                                <p className="text-gray-600 mt-2 text-sm">Entrez le numéro unique pour valider votre document</p>
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Certifications Section */}
            <div className="bg-gray-50 py-16 px-8">
                <motion.div 
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Nos Certifications</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Des certifications reconnues qui valorisent vos compétences et accélèrent votre carrière.
                    </p>
                </motion.div>
                
                <motion.div 
                    className="relative mx-auto lg:w-2/3 rounded-xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={imagesCertif[currentIndexCertif]}
                        alt={`Slide ${currentIndexCertif + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-1000"
                    />
                    <img
                        src={image8}
                        alt="Overlay"
                        className="absolute top-6 right-6 w-20 h-20"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                        <div className="flex justify-center space-x-2">
                            {imagesCertif.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndexCertif(index)}
                                    className={`w-3 h-3 rounded-full ${currentIndexCertif === index ? 'bg-yellow-400' : 'bg-white bg-opacity-50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 py-16 px-8 text-white">
                <motion.div 
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pourquoi choisir CertifSure ?</h2>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
                </motion.div>
                
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaShieldAlt className="text-4xl mb-4 text-yellow-400" />,
                            title: "Sécurité Maximale",
                            description: "Technologie blockchain pour une protection anti-fraude absolue de vos documents."
                        },
                        {
                            icon: <FaChartLine className="text-4xl mb-4 text-yellow-400" />,
                            title: "Reconnaissance Mondiale",
                            description: "Certifications acceptées par les plus grandes entreprises et institutions."
                        },
                        {
                            icon: <FaHandshake className="text-4xl mb-4 text-yellow-400" />,
                            title: "Réseau Partenaires",
                            description: "Plus de 200 organisations partenaires à travers le monde."
                        }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm border border-white border-opacity-20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="text-center">
                                {item.icon}
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                <p className="text-blue-500">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 px-8 bg-white">
                <motion.div 
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Notre Impact</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>
                
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Attestations Délivrées", value: "10K+", color: "from-blue-600 to-blue-400" },
                        { title: "Certifications", value: "5K+", color: "from-purple-600 to-purple-400" },
                        { title: "Vérifications", value: "20K+", color: "from-green-600 to-green-400" },
                        { title: "Utilisateurs", value: "15K+", color: "from-yellow-600 to-yellow-400" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className={`bg-gradient-to-r ${stat.color} text-white p-8 rounded-xl shadow-lg text-center`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="text-4xl font-bold mb-2">{stat.value}</p>
                            <p className="text-lg">{stat.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Partners Section */}
            {/* <div className="py-16 px-8 bg-gray-50">
                <motion.div 
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Nos Partenaires</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Collaborations avec des organisations de premier plan à travers le monde.
                    </p>
                </motion.div>
                
                <motion.div 
                    className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    viewport={{ once: true }}
                >
                    {[image9, image10, image11, image12, image13, image14].map((img, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <img
                                src={img}
                                alt={`Partenaire ${index + 1}`}
                                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div> */}

            <Footer />
        </div>
    );
}

export default Accueil;