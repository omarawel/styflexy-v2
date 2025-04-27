import { PrismaClient } from '@prisma/client';
import stripe from 'stripe';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: any, res: any) {
  const body = req.body;

  // CORS-Header
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Route: /api/register
  if (req.url === '/api/register' && req.method === 'POST') {
    const { email, password, role } = body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: { email, password: hashedPassword, role: role || 'customer' },
      });
      if (role === 'salon') {
        await prisma.salon.create({
          data: { name: email, address: '', userId: user.id },
        });
      }
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(400).json({ error: 'User already exists' });
    }
  }

  // Route: /api/create-checkout-session
  if (req.url === '/api/create-checkout-session' && req.method === 'POST') {
    const { plan, userId } = body;
    const priceIds = {
      basic: 'price_basic_monthly',
      premium: 'price_premium_monthly',
      pro: 'price_pro_monthly',
    };

    try {
      const session = await stripeClient.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [{ price: priceIds[plan as keyof typeof priceIds], quantity: 1 }],
        success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
        client_reference_id: userId?.toString(),
      });
      return res.status(200).json({ id: session.id });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create checkout session' });
    }
  }

  // Route: /api/bookings
  if (req.url === '/api/bookings' && req.method === 'POST') {
    const { userId, salonId, service, date } = body;
    try {
      const booking = await prisma.booking.create({
        data: { userId, salonId, service, date: new Date(date) },
      });
      return res.status(200).json({ booking });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create booking' });
    }
  }

  // Route: /api/salons/:id/bookings
  if (req.url.startsWith('/api/salons/') && req.method === 'GET') {
    const id = parseInt(req.url.split('/')[3]);
    try {
      const bookings = await prisma.booking.findMany({
        where: { salonId: id },
      });
      return res.status(200).json({ bookings });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch bookings' });
    }
  }

  return res.status(404).json({ error: 'Route not found' });
}
