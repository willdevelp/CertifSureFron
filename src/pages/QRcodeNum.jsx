// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FiDownload, FiRotateCw, FiAlertTriangle, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
// import axios from 'axios';
// import Header from '../layouts/Header';
// import Footer from '../layouts/Footer';

// function QRcodeNum() {
//     const { refNum } = useParams();
//     const navigate = useNavigate();
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(true);
//     const [certificateData, setCertificateData] = useState(null);

//     const fetchCertificate = React.useCallback(async () => {

//         setIsLoading(true);
//         setError('');
//         try {
//             const response = await axios.get(
//                 `http://localhost:8000/api/upload-files/${refNum}`,
//             );

//             if (response.data.success) {
//                 setCertificateData(response.data);
//             } else {
//                 setError('Certificat non valide');
//                 setCertificateData(null);
//             }
//         } catch (error) {
//             if (axios.isCancel(error)) {
//                 console.log('Requête annulée:', error.message);
//             } else {
//                 setError('Une erreur est survenue lors de la vérification du certificat');
//                 setCertificateData(null);
//                 console.error('Erreur:', error);
//             }
//         } finally {
//             setIsLoading(false);
//         }
//     }, [refNum]);

//     useEffect(() => {
//         fetchCertificate();
//     }, []);

//     if (isLoading) {
//         return (
//             <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
//                 <Header />
//                 <main className="flex-grow flex items-center justify-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md w-full mx-4"
//                     >
//                         <div className="flex justify-center mb-6">
//                             <motion.div
//                                 animate={{ rotate: 360 }}
//                                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
//                                 className="text-blue-500"
//                             >
//                                 <FiRotateCw className="text-4xl" />
//                             </motion.div>
//                         </div>
//                         <h2 className="text-2xl font-bold text-gray-800 mb-2">Vérification en cours</h2>
//                         <p className="text-gray-600">Nous validons votre certificat, veuillez patienter...</p>
//                     </motion.div>
//                 </main>
//                 <Footer />
//             </div>
//         );
//     }

//     if (certificateData) {
//         return (
//             <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
//                 <Header />
//                 <main className="flex-grow">
//                     {/* Validation Banner */}
//                     <motion.div
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="bg-gradient-to-r from-green-500 to-emerald-600 py-8 shadow-md"
//                     >
//                         <div className="container mx-auto px-4 text-center">
//                             <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-full mb-4">
//                                 <FiCheckCircle className="text-3xl text-white" />
//                             </div>
//                             <h1 className="text-3xl font-bold text-white mb-2">Certificat Authentique</h1>
//                             <p className="text-white/90 text-lg">Ce document a été vérifié et validé par notre système</p>
//                         </div>
//                     </motion.div>

//                     {/* Certificate Details */}
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                         className="container mx-auto px-4 py-12"
//                     >
//                         <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
//                             {/* Certificate Header */}
//                             <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
//                                 <h2 className="text-2xl font-bold">Détails du Certificat</h2>
//                                 <p className="opacity-90">Numéro de référence: {certificateData.certificate.reference_number}</p>
//                             </div>

//                             {/* Certificate Content */}
//                             <div className="p-6 md:p-8">
//                                 <div className="grid md:grid-cols-2 gap-6 mb-8">
//                                     <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
//                                         <h3 className="text-lg font-semibold text-gray-700 mb-3">Informations</h3>
//                                         <div className="space-y-3">
//                                             <div>
//                                                 <p className="text-sm text-gray-500">Nom du document</p>
//                                                 <p className="font-medium">{certificateData.certificate.original_name}</p>
//                                             </div>
//                                             <div>
//                                                 <p className="text-sm text-gray-500">Date de délivrance</p>
//                                                 <p className="font-medium">
//                                                     {new Date(certificateData.certificate.created_at).toLocaleDateString('fr-FR', {
//                                                         year: 'numeric',
//                                                         month: 'long',
//                                                         day: 'numeric'
//                                                     })}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
//                                         <h3 className="text-lg font-semibold text-gray-700 mb-3">Statut</h3>
//                                         <div className="flex items-center gap-3">
//                                             <div className="bg-green-100 p-2 rounded-full">
//                                                 <FiCheckCircle className="text-green-600 text-xl" />
//                                             </div>
//                                             <div>
//                                                 <p className="font-medium text-green-600">Validé</p>
//                                                 <p className="text-sm text-gray-500">Ce certificat est authentique</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* PDF Preview */}
//                                 {certificateData.certificate.processed_path && (
//                                     <div className="mb-8">
//                                         <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                                             </svg>
//                                             Aperçu du document
//                                         </h3>
//                                         <div className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
//                                             <iframe
//                                                 src={`http://localhost:8000/storage/${certificateData.certificate.processed_path}`}
//                                                 title="Aperçu du PDF"
//                                                 className="w-full h-96"
//                                             ></iframe>
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Actions */}
//                                 <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
//                                     <motion.button
//                                         whileHover={{ scale: 1.03 }}
//                                         whileTap={{ scale: 0.98 }}
//                                         onClick={() => navigate('/')}
//                                         className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
//                                     >
//                                         <FiArrowLeft className="text-lg" />
//                                         Retour à l'accueil
//                                     </motion.button>
//                                     <motion.a
//                                         whileHover={{ scale: 1.03 }}
//                                         whileTap={{ scale: 0.98 }}
//                                         href={`http://localhost:8000/api/download-file/${certificateData.certificate.reference_number}`}
//                                         download={certificateData.certificate.original_name}
//                                         className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
//                                     >
//                                         <FiDownload className="text-lg" />
//                                         Télécharger le PDF
//                                     </motion.a>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </main>
//                 <Footer />
//             </div>
//         );
//     }

//     // Error state
//     return (
//         <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
//             <Header />
//             <main className="flex-grow flex items-center justify-center py-12">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full mx-4"
//                 >
//                     {/* Error Banner */}
//                     <div className="bg-gradient-to-r from-red-500 to-rose-600 py-6 px-6 text-white text-center">
//                         <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-full mb-3">
//                             <FiAlertTriangle className="text-2xl" />
//                         </div>
//                         <h1 className="text-2xl font-bold mb-1">Certificat Invalide</h1>
//                         <p className="opacity-90">Nous n'avons pas pu valider ce certificat</p>
//                     </div>

//                     {/* Error Content */}
//                     <div className="p-6">
//                         <div className="mb-6">
//                             <h2 className="text-lg font-semibold text-gray-800 mb-3">Raisons possibles :</h2>
//                             <ul className="space-y-3 pl-5">
//                                 <li className="flex items-start gap-2">
//                                     <span className="text-red-500 mt-1">•</span>
//                                     <span>Numéro de référence ou QR Code incorrect</span>
//                                 </li>
//                                 <li className="flex items-start gap-2">
//                                     <span className="text-red-500 mt-1">•</span>
//                                     <span>Certificat expiré ou révoqué</span>
//                                 </li>
//                                 <li className="flex items-start gap-2">
//                                     <span className="text-red-500 mt-1">•</span>
//                                     <span>Fraude potentielle détectée</span>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
//                             <p className="text-blue-800">
//                                 Veuillez contacter <span className="font-semibold">l'émetteur de votre certificat</span> pour plus d'informations.
//                             </p>
//                         </div>

//                         <div className="flex flex-col gap-3">
//                             <motion.button
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 onClick={fetchCertificate}
//                                 className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
//                             >
//                                 <FiRotateCw className="text-lg" />
//                                 Réessayer
//                             </motion.button>
//                             <motion.button
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 onClick={() => navigate('/')}
//                                 className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-all duration-300 flex items-center justify-center gap-2"
//                             >
//                                 <FiArrowLeft className="text-lg" />
//                                 Retour à l'accueil
//                             </motion.button>
//                         </div>
//                     </div>
//                 </motion.div>
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default QRcodeNum;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDownload, FiRotateCw, FiAlertTriangle, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

function QRcodeNum() {
    const { refNum } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [certificateData, setCertificateData] = useState(null);

    useEffect(() => {
        const fetchCertificate = async () => {
            setIsLoading(true);
            setError('');
            
            try {
                const response = await axios.get(
                    `https://cerisuckback.onrender.com/api/upload-files/${refNum}`
                );

                if (response.data.success) {
                    setCertificateData(response.data);
                } else {
                    setError('Certificat non valide');
                    setCertificateData(null);
                }
            } catch (error) {
                setError('Une erreur est survenue lors de la vérification du certificat');
                setCertificateData(null);
                console.error('Erreur:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCertificate();
    }, [refNum]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md w-full mx-4"
                    >
                        <div className="flex justify-center mb-6">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="text-blue-500"
                            >
                                <FiRotateCw className="text-4xl" />
                            </motion.div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vérification en cours</h2>
                        <p className="text-gray-600">Nous validons votre certificat, veuillez patienter...</p>
                    </motion.div>
                </main>
                <Footer />
            </div>
        );
    }

    if (certificateData) {
        return (
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
                <Header />
                <main className="flex-grow">
                    {/* Bannière de validation */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 py-8 shadow-md"
                    >
                        <div className="container mx-auto px-4 text-center">
                            <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-full mb-4">
                                <FiCheckCircle className="text-3xl text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2">Certificat Authentique</h1>
                            <p className="text-white/90 text-lg">Ce document a été vérifié et validé par notre système</p>
                        </div>
                    </motion.div>

                    {/* Détails du certificat */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="container mx-auto px-4 py-12"
                    >
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                            {/* En-tête */}
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                                <h2 className="text-2xl font-bold">Détails du Certificat</h2>
                                <p className="opacity-90">Numéro de référence: {certificateData.certificate.reference_number}</p>
                            </div>

                            {/* Contenu */}
                            <div className="p-6 md:p-8">
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-3">Informations</h3>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="text-sm text-gray-500">Nom du document</p>
                                                <p className="font-medium">{certificateData.certificate.original_name}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Date de délivrance</p>
                                                <p className="font-medium">
                                                    {new Date(certificateData.certificate.created_at).toLocaleDateString('fr-FR', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-3">Statut</h3>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-green-100 p-2 rounded-full">
                                                <FiCheckCircle className="text-green-600 text-xl" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-green-600">Validé</p>
                                                <p className="text-sm text-gray-500">Ce certificat est authentique</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Prévisualisation PDF */}
                                {certificateData.certificate.processed_path && (
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Aperçu du document</h3>
                                        <div className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                            <iframe
                                                src={`https://cerisuckback.onrender.com/storage/${certificateData.certificate.processed_path}`}
                                                title="Aperçu du PDF"
                                                className="w-full h-96"
                                            ></iframe>
                                        </div>
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => navigate('/')}
                                        className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
                                    >
                                        <FiArrowLeft />
                                        Retour à l'accueil
                                    </motion.button>
                                    <motion.a
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={`https://cerisuckback.onrender.com/api/download-file/${certificateData.certificate.reference_number}`}
                                        download
                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
                                    >
                                        <FiDownload />
                                        Télécharger le PDF
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </main>
                <Footer />
            </div>
        );
    }

    // État d'erreur
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
            <Header />
            <main className="flex-grow flex items-center justify-center py-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full mx-4"
                >
                    {/* Bannière d'erreur */}
                    <div className="bg-gradient-to-r from-red-500 to-rose-600 py-6 px-6 text-white text-center">
                        <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-full mb-3">
                            <FiAlertTriangle className="text-2xl" />
                        </div>
                        <h1 className="text-2xl font-bold mb-1">Certificat Invalide</h1>
                        <p className="opacity-90">Nous n'avons pas pu valider ce certificat</p>
                    </div>

                    {/* Contenu erreur */}
                    <div className="p-6">
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-3">Raisons possibles :</h2>
                            <ul className="space-y-3 pl-5">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>Numéro de référence incorrect</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>Certificat expiré ou révoqué</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>Problème de connexion au serveur</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.location.reload()}
                                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
                            >
                                <FiRotateCw />
                                Réessayer
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/')}
                                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg flex items-center justify-center gap-2"
                            >
                                <FiArrowLeft />
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

export default QRcodeNum;