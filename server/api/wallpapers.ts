import prisma from '../prismaInstance'

export default defineEventHandler(async (event) => {
  const wallpapersList = await prisma.wallpapers.findMany()
  return wallpapersList;
});
