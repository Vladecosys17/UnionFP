import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

// ======================
// Verificación de entorno
// ======================
console.log('[BOOT] Node version:', process.version);
console.log('[BOOT] PID:', process.pid);

console.log('[ENV] DATABASE_URL exists:', !!process.env.DATABASE_URL);
if (process.env.DATABASE_URL) {
  try {
    const u = new URL(process.env.DATABASE_URL);
    console.log('[ENV] DB host:', u.hostname);
    console.log('[ENV] DB port:', u.port || '5432');
    console.log('[ENV] DB sslmode:', u.searchParams.get('sslmode'));
  } catch {
    console.error('[ENV] DATABASE_URL inválida');
  }
}

// ======================
// Verificación DNS explícita
// ======================
import { lookup } from 'dns/promises';

try {
  const res = await lookup('db.fartlyjayunbdhynkipm.supabase.co', { all: true });
  console.log('[DNS] Resolved addresses:', res);
} catch (e) {
  console.error('[DNS] Resolution failed:', e);
}

// ======================
// Verificación Prisma REAL
// ======================
import { prisma } from './config/prisma.js';

try {
  console.log('[PRISMA] Connecting...');
  await prisma.$connect();
  console.log('[PRISMA] Connected');

  const r = await prisma.$queryRaw`SELECT 1 as ok`;
  console.log('[PRISMA] Query result:', r);

  await prisma.$disconnect();
  console.log('[PRISMA] Disconnected');
} catch (e) {
  console.error('[PRISMA] FAILED');
  console.error(e);
}

// ======================
// Arranque servidor
// ======================
import './server.js';
