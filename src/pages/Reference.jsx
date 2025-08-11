import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { FaSearch, FaSpinner } from 'react-icons/fa';

function Reference() {
    const [referenceNumber, setReferenceNumber] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!referenceNumber.trim()) return;
        
        setIsLoading(true);
        setError('');
        
        try {
            const response = await axios.get(`https://cerisuckback.onrender.com/api/upload-files/${referenceNumber}`);
            navigate('/certificate-result', { 
                state: {
                    certificate: response.data,
                    animationDirection: 'right' 
                } 
            });
        } catch (err) {
            setError(err.response?.data?.message || 'Certificat non trouvé. Vérifiez le numéro de référence.');
            console.error('Verification error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
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

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />
            
            <motion.main 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex-grow flex items-center justify-center p-4"
            >
                <motion.div 
                    variants={itemVariants}
                    className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
                >
                    <div className="bg-gradient-to-r from-[#2E86AB] to-[#1B5299] p-6 text-white">
                        <motion.h1 
                            className="text-3xl font-bold text-center"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Vérification de Certificat
                        </motion.h1>
                        <p className="text-center text-blue-100 mt-2">
                            Entrez votre numéro de référence pour valider l'authenticité
                        </p>
                    </div>

                    <div className="p-8">
                        <motion.form 
                            onSubmit={handleSubmit}
                            variants={itemVariants}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="reference" className="block text-sm font-medium text-gray-700 mb-1">
                                    Numéro de Référence
                                </label>
                                <motion.div whileHover={{ scale: 1.01 }}>
                                    <input
                                        id="reference"
                                        type="text"
                                        value={referenceNumber}
                                        onChange={(e) => setReferenceNumber(e.target.value)}
                                        placeholder="Ex: CERT-2023-ABCD1234"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent transition-all"
                                        required
                                        disabled={isLoading}
                                    />
                                </motion.div>
                            </div>

                            <motion.button
                                type="submit"
                                className={`w-full flex items-center justify-center p-4 rounded-lg font-medium text-white transition-all ${
                                    isLoading 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-[#2E86AB] to-[#1B5299] hover:from-[#1B5299] hover:to-[#2E86AB] shadow-lg hover:shadow-xl'
                                }`}
                                whileTap={{ scale: 0.98 }}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="animate-spin mr-2" />
                                        Vérification en cours...
                                    </>
                                ) : (
                                    <>
                                        <FaSearch className="mr-2" />
                                        Vérifier le Certificat
                                    </>
                                )}
                            </motion.button>
                        </motion.form>

                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
                            >
                                <p>{error}</p>
                            </motion.div>
                        )}

                        <motion.div 
                            variants={itemVariants}
                            className="mt-8 text-center text-gray-500 text-sm"
                        >
                            <p>Vous ne trouvez pas votre référence ? <a href="/contact" className="text-[#2E86AB] hover:underline">Contactez-nous</a></p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.main>
            
            <Footer />
        </div>
    );
}

export default Reference;