'use client';

import { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';
import { translations } from '@/utils/translations';

interface LinkedInQRCodeProps {
  defaultUrl?: string;
}

export default function LinkedInQRCode({ defaultUrl = '' }: LinkedInQRCodeProps) {
  const [url, setUrl] = useState(defaultUrl);
  const [color, setColor] = useState('#2563EB'); // ZenGrowth blue
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>('https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png');
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [error, setError] = useState<string | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);

  const t = translations[language];

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setError(null);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.onerror = () => {
        setError('Error loading image');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (!url) {
      setError('Please enter a LinkedIn URL');
      return;
    }

    if (qrRef.current) {
      try {
        setError(null);
        const dataUrl = await toPng(qrRef.current, {
          quality: 1,
          pixelRatio: 2,
          skipFonts: true,
          backgroundColor: 'white',
        });
        const link = document.createElement('a');
        link.download = 'linkedin-qr-code.png';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
        setError('Error generating QR code. Please try again.');
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {t.title}
          </h2>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            {t.language}: {t.languages[language === 'en' ? 'fr' : 'en']}
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.urlLabel}
              </label>
              <input
                type="url"
                value={url}
                onChange={handleUrlChange}
                placeholder={t.urlPlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.colorLabel}
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  value={color}
                  onChange={handleColorChange}
                  className="w-12 h-12 cursor-pointer rounded-lg border border-gray-300"
                />
                <span className="text-gray-600">{color}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.logoLabel}
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div ref={qrRef} className="relative p-4 bg-white rounded-lg shadow-md">
              <QRCode
                value={url || 'https://linkedin.com'}
                size={256}
                bgColor="white"
                fgColor={color}
                level="H"
                className="rounded-lg"
              />
              {logoPreview && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={logoPreview}
                    alt="Logo"
                    className="w-16 h-16 object-contain rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png';
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleDownload}
            disabled={!url}
            className={`px-6 py-3 rounded-lg text-white font-medium transition-all ${
              url
                ? 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {t.downloadButton}
          </button>
        </div>
      </div>
    </div>
  );
} 