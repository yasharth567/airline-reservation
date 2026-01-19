'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DestinationsPage() {
  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      desc: 'Sun-drenched beaches, rice terraces, and vibrant culture.',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60',
    },
    {
      id: 2,
      name: 'Paris, France',
      desc: 'Iconic art, cafés, and riverside promenades.',
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=60',
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      desc: 'Timeless temples, gardens, and seasonal beauty.',
      img: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=60',
    },
    {
      id: 4,
      name: 'Reykjavík, Iceland',
      desc: 'Otherworldly landscapes and Northern Lights.',
      img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Destinations</h1>
          <p className="mt-2 text-lg opacity-90">Hand-picked places for every kind of traveler.</p>
        </div>
      </header>

      <main className="py-10 px-6 max-w-6xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <article key={d.id} className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="h-40">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg">{d.name}</h2>
                <p className="text-gray-600 text-sm mt-2">{d.desc}</p>
                <div className="mt-4">
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded">Explore</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
