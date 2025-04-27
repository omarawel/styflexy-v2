import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-styflex-dark text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold">Styflex</span>
        </Link>
        <div className="space-x-4">
          <Link href="/customer">
            <span className="hover:text-styflex-gold">Kunden</span>
          </Link>
          <Link href="/salons">
            <span className="hover:text-styflex-gold">Salons</span>
          </Link>
          <Link href="/vip">
            <span className="hover:text-styflex-gold">VIP</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
