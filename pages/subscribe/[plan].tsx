import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Subscribe() {
  const router = useRouter();
  const { plan } = router.query;

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan, userId: '1' }), // Beispiel-userId
    });

    const { id } = await response.json();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-styflex-dark sm:text-5xl">
              Abonnement: {plan}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Werde Mitglied und genieße exklusive Vorteile mit dem {plan} Abo.
            </p>
            <button
              onClick={handleCheckout}
              className="mt-8 px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark"
            >
              Jetzt abonnieren
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
