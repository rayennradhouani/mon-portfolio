import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Rayen Radhouani</h1>
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-blue-500">À propos</a>
          <a href="#projects" className="hover:text-blue-500">Projets</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[80vh] text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold"
        >
          Bonjour, je suis Rayen 👋
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg"
        >
          Développeuse Web & Mobile | Cybersécurité
        </motion.p>
        <div className="mt-6 flex gap-4">
          <a href="https://github.com/rayennradhouani" target="_blank" className="p-3 bg-white text-gray-900 rounded-full shadow hover:scale-110 transition">
            <Github />
          </a>
          <a href="https://linkedin.com" target="_blank" className="p-3 bg-white text-gray-900 rounded-full shadow hover:scale-110 transition">
            <Linkedin />
          </a>
          <a href="mailto:rayen.radhouani@isimg.tn" className="p-3 bg-white text-gray-900 rounded-full shadow hover:scale-110 transition">
            <Mail />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-20 bg-white">
        <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
        <p>
          Je suis passionnée par le développement web et mobile, ainsi que par la cybersécurité.
          Actuellement en Master Cybersécurité & Développement à l’ISIMG.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-10 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Mes Projets</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Application de Location</h3>
            <p>Développement d'une application web de location en Java EE.</p>
          </motion.div>
          <motion.div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Gestion de Bibliothèque</h3>
            <p>Application avec gestion des étudiants, livres et examens.</p>
          </motion.div>
          <motion.div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">TaskEasy</h3>
            <p>Plateforme numérique pour la gestion des tâches et projets étudiants.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
        <p>Email : <a href="mailto:rayen.radhouani@isimg.tn" className="text-blue-600">rayen.radhouani@isimg.tn</a></p>
        <p>Téléphone : +216 26 945 262</p>
      </section>

      <footer className="text-center py-6 bg-gray-200">
        © {new Date().getFullYear()} Rayen Radhouani. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;
