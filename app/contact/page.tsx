'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have questions? Reach out to us at:
        </p>
        <p className="mt-4 font-medium">📧 support@travel.com</p>
        <p className="font-medium">📞 +91 98765 43210</p>
      </main>
      <Footer />
    </div>
  );
}
