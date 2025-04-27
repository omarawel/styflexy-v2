import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function VIP() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-styflex-dark sm:text-5xl">VIP-Bereich</h1>
            <p className="mt-4 text-lg text-gray-600">Exklusive Vorteile für unsere VIP-Mitglieder.</p>
            <div className="mt-8">
              <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">
                Mehr erfahren
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
