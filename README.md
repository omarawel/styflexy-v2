# styflexy-v2
Setup





Clone das Repository.



Installiere Abhängigkeiten: npm install



Erstelle eine .env-Datei mit den folgenden Variablen:

DATABASE_URL=postgresql://user:password@host:port/styflex
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_URL=https://styflexy-v2.vercel.app



Führe npx prisma generate aus, um den Prisma-Client zu generieren.



Starte das Projekt: npm run dev

Deployment





Deploye das Projekt auf Vercel.



Stelle sicher, dass die Umgebungsvariablen in Vercel gesetzt sind.
