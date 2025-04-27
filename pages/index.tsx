import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="home" className="bg-styflex-pastel py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold text-styflex-dark sm:text-5xl md:text-6xl">
                Beauty, wie du willst – wann du willst
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl">
                Entdecke Styflex: Deine digitale Plattform für planbare Beauty- und Friseurservices. Flexible Abos, transparente Preise, nachhaltige Lösungen.
              </p>
              <div className="mt-10 sm:flex sm:gap-4 sm:justify-center lg:justify-start">
                <Link href="/customer">
                  <button className="w-full sm:w-auto px-8 py-3 bg-styflex-gold text-white rounded-md text-base font-medium hover:bg-styflex-dark md:py-4 md:text-lg md:px-10">
                    Jetzt buchen
                  </button>
                </Link>
                <Link href="/salons">
                  <button className="w-full sm:w-auto mt-4 sm:mt-0 px-8 py-3 bg-styflex-dark text-white rounded-md text-base font-medium hover:bg-styflex-gold md:py-4 md:text-lg md:px-10">
                    Partner werden
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Styflex Hero" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Abo-Modelle Section */}
        <section id="subscriptions" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-styflex-dark sm:text-4xl">Flexible Abo-Modelle</h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="p-6 bg-styflex-pastel rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-styflex-dark">Basic</h3>
                <p className="mt-2 text-gray-600">€29/Monat</p>
                <p className="mt-2 text-gray-600">1 Service pro Monat</p>
                <Link href="/subscribe/basic">
                  <button className="mt-4 px-6 py-2 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Jetzt abonnieren</button>
                </Link>
              </div>
              <div className="p-6 bg-styflex-pastel rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-styflex-dark">Premium</h3>
                <p className="mt-2 text-gray-600">€49/Monat</p>
                <p className="mt-2 text-gray-600">3 Services pro Monat</p>
                <Link href="/subscribe/premium">
                  <button className="mt-4 px-6 py-2 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Jetzt abonnieren</button>
                </Link>
              </div>
              <div className="p-6 bg-styflex-pastel rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-styflex-dark">Pro</h3>
                <p className="mt-2 text-gray-600">€79/Monat</p>
                <p className="mt-2 text-gray-600">Unbegrenzte Services</p>
                <Link href="/subscribe/pro">
                  <button className="mt-4 px-6 py-2 bg-styflex-gold text-white rounded-md hover:bg-styflex-dark">Jetzt abonnieren</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section id="download" className="bg-styflex-pastel py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-styflex-dark sm:text-4xl">Lade die Styflex App herunter</h2>
            <div className="mt-8 flex justify-center space-x-4">
              <Image src="/app-store-placeholder.png" alt="App Store" width={150} height={50} />
              <Image src="/google-play-placeholder.png" alt="Google Play" width={150} height={50} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
