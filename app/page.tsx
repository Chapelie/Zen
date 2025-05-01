import LinkedInQRCode from '@/components/LinkedInQRCode';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-6">
            ZenGrowth LinkedIn QR Code Generator
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Create a personalized QR code for your LinkedIn profile. Customize the color and add your logo to make it unique.
          </p>
        </div>
        <LinkedInQRCode />
      </div>
    </main>
  );
} 