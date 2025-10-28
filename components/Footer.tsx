// components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="lg:mt-10 w-full border-t border-gray-200 bg-gray-100 py-6 text-center dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Daveloper Todos los derechos reservados.
        </p>

        <div className="mt-4 gap-6 flex justify-center space-x-6">
          <a
            href="https://github.com/DaveHya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaGithub size={36} />
          </a>

          <a
            href="https://www.linkedin.com/in/dave-esteban-hyacinthe-b533451a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={36} />
          </a>

          <a
            href="mailto:davesteban6@gmail.com"
            className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
          >
            <FaEnvelope size={36} />
          </a>
        </div>
      </div>
    </footer>
  );
}
