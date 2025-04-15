// components/OfferWall.tsx
'use client';
import { useEffect, useState } from 'react';
// types/offer.ts
export interface Offer {
    offerid: number;
    name: string;
    name_short: string;
    description: string;
    adcopy: string;
    picture: string;
    payout: string;
    country: string;
    device: string;
    link: string;
    epc: string;
  }
  
  export interface OfferResponse {
    success: boolean;
    error: string | null;
    offers: Offer[];
  }
export default function AdsWall() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('/api/offers');
        const data: OfferResponse = await response.json();
        
        if (data.success) {
          setOffers(data.offers);
        } else {
          setError(data.error || 'Failed to load offers');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) return <div className="text-center p-4">Loading offers...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {offers.map((offer) => (
        <div key={offer.offerid} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col h-full">
            <img
              src={offer.picture}
              alt={offer.name_short}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{offer.name_short}</h3>
            <p className="text-gray-600 mb-4 flex-1">{offer.adcopy}</p>
            
            <div className="mt-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  Payout: ${offer.payout}
                </span>
                
              </div>
              
              <a
                href={offer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Get Offer
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}