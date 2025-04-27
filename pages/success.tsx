import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-styflex-dark sm:text-5xl">
              Zahlung erfolgreich!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Vielen Dank für dein Abo. Du kannst jetzt alle Vorteile nutzen.
            </p>
            <Link href="/">
              <button className="mt-8 px-6 py-3 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">
                Zurück zur Startseite
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
