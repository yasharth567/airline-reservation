'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We help people discover extraordinary places and craft journeys that
          linger long after the ticket is tucked away. More than routes and
          fares, we build the kind of travel that expands perspective — the
          quiet dawns, the unexpected kindness of strangers, and the stories
          you tell for years.
        </p>

        <section className="mt-8 max-w-3xl mx-auto text-left">
          <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded by a group of travelers who believed that great trips begin
            with thoughtful planning and a little bit of wonder, our company
            started from weekend getaways and grew into full itineraries that
            celebrate culture, cuisine, and curiosity. Every route we offer is
            chosen to spark discovery.
          </p>

          <h3 className="text-xl font-medium mb-2">Why our logo isn't the whole story</h3>
          <p className="text-gray-600">
            The SkySft logo you see represents motion and open skies, but a
            symbol can only hint at what we truly value: human stories. We
            design experiences that match the depth of those stories, so the
            logo is only the starting point — the real identity lives in the
            experiences we help create.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
