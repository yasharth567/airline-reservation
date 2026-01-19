"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DealsPage() {
  const deals = [
    {
      id: 1,
      title: '50% off to Bali',
      desc: 'Round-trip flights starting at $399',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60',
      price: '$399',
      tag: 'Limited time',
    },
    {
      id: 2,
      title: 'Summer in Europe',
      desc: 'Discounted multi-city fares starting at $499',
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=60',
      price: '$499',
      tag: 'Popular',
    },
    {
      id: 3,
      title: 'Last-minute Asia',
      desc: 'Flash sales for select dates — save up to 40%',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=60',
      price: 'From $299',
      tag: 'Flash sale',
    },
    {
      id: 4,
      title: 'Caribbean Escape',
      desc: 'Resort + flight packages with up to 35% off',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60',
      price: '$649',
      tag: 'Package',
    },
    {
      id: 5,
      title: 'City Breaks',
      desc: 'Short-haul city trips with flexible dates',
      img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=60',
      price: 'From $129',
      tag: 'Budget',
    },
    {
      id: 6,
      title: 'Luxury Pacific',
      desc: 'Premium cabins and exclusive add-ons',
      img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=60',
      price: '$1299',
      tag: 'Premium',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Deals & Offers</h1>
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <div key={deal.id} className="relative rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="h-48">
                <img src={deal.img} alt={deal.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold">{deal.title}</h2>
                  <span className="text-sm text-gray-500">{deal.price}</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{deal.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">Book now</button>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{deal.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
