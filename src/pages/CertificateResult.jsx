import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import '../index.css';

function CertificateResult() {
    const location = useLocation();
    const navigate = useNavigate();
    const certificate = location.state?.certificate.certificate;

    if (!certificate) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4 text-center"
                >
                    <div className="text-red-500 mb-4 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Certificat non trouvé</h2>
                    <p className="text-gray-600 mb-6">
                        Aucun certificat correspondant trouvé. Veuillez vérifier votre numéro de référence et réessayer.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full"
                    >
                        <FiArrowLeft className="text-lg" />
                        Retour à l'accueil
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    const fileUrl = `http://localhost:8000/storage/${certificate.processed_path}`;

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <Header />
            
            <main className="flex-grow flex items-center justify-center py-10 px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    {/* Certificate Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold">Certificat Authentique</h1>
                                <p className="opacity-90 mt-1">Numéro de référence: {certificate.reference_number}</p>
                            </div>
                            <div className="bg-white/20 p-3 rounded-full">
                                <FiCheckCircle className="text-2xl" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Certificate Content */}
                    <div className="p-8">
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Certificat de {certificate.original_name}</h2>
                            </div>
                            
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Nom du fichier</p>
                                        <p className="font-semibold">{certificate.original_name}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Date de génération</p>
                                        <p className="font-semibold">{new Date(certificate.created_at).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Statut</p>
                                        <p className="font-semibold text-green-600 flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Vérifié et authentique
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Format</p>
                                        <p className="font-semibold">PDF</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PDF Preview */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                Aperçu du document
                            </h3>
                            <div className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <iframe
                                    src={fileUrl}
                                    title="Aperçu du PDF"
                                    className="w-full h-96"
                                ></iframe>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href={`http://localhost:8000/api/download-file/${certificate.reference_number}`}
                                download={certificate.original_name}
                                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FiDownload className="text-lg" />
                                Télécharger le PDF
                            </motion.a>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/')}
                                className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FiArrowLeft className="text-lg" />
                                Retour à l'accueil
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </main>
            
            <Footer />
        </div>
    );
}

export default CertificateResult;