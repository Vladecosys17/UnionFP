import 'dotenv/config';
import { prisma } from '../config/prisma.js';

async function run() {
  console.log('DATABASE_URL loaded:', !!process.env.DATABASE_URL);

  // 1. Test de conexión
  await prisma.$connect();
  console.log('Prisma connected');

  // 2. Inserción
  const user = await prisma.user.create({
    data: {
      email: `test_${Date.now()}@example.com`,
      passwordHash: 'hash_de_prueba',
      name: 'Test User'
    }
  });

  console.log('User inserted:', user.id);

  // 3. Consulta
  const fetched = await prisma.user.findUnique({
    where: { id: user.id }
  });

  console.log('User fetched:', fetched.email);

  // 4. Limpieza (opcional pero correcta)
  await prisma.user.delete({
    where: { id: user.id }
  });

  console.log('User deleted');

  await prisma.$disconnect();
  console.log('Prisma disconnected');
}

run().catch(async (err) => {
  console.error('TEST FAILED');
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
