import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Customer() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-styflex-dark sm:text-5xl">Kundenbereich</h1>
            <p className="mt-4 text-lg text-gray-600">Buche deinen nächsten Termin und verwalte deine Abos.</p>
            <div className="mt-8">
              <button className="px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">
                Termin buchen
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
