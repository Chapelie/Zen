'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <span className="text-xl font-bold text-gray-900">ZenGrowth</span>
            <p className="text-sm text-gray-500">
              © {currentYear} ZenGrowth. Tous droits réservés.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://zengrowth.app/free-tools" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Outils gratuits
                </Link>
              </li>
              <li>
                <Link href="https://zengrowth.app/contact" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="https://zengrowth.app/affiliation" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Affiliation
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://zengrowth.app/cgu" className="text-gray-500 hover:text-blue-600 transition-colors">
                  CGU/CGV
                </Link>
              </li>
              <li>
                <Link href="https://zengrowth.app/confidentialite" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://zengrowth.app/contact" className="text-gray-500 hover:text-blue-600 transition-colors">
                  contact@zengrowth.app
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 