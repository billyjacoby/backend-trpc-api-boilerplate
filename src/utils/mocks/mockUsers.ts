import { z } from 'zod';

export const USER_ROLES = ['administrator', 'apprentice', 'standard'] as const;

export const UserConfigSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  username: z.string(),
  imageUrl: z.string().optional(),
  role: z.enum(USER_ROLES),
});

export type User = z.infer<typeof UserConfigSchema>;

export type Users = ReadonlyArray<User>;

const baseImageUrl = 'https://raw.githubusercontent.com/mkosir/prisma-next-typescript/main/misc/user-images';

export const mockUsers = [
  {
    id: '1f008731-4645-43de-8af9-3060d4086001',
    email: 'walter.white@mail.com',
    name: 'Walter White',
    username: 'Heisenberg',
    imageUrl: `${baseImageUrl}/heisenberg.jpg`,
    role: 'administrator',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086002',
    email: 'jesse.pinkman@mail.com',
    name: 'Jesse Pinkman',
    username: 'Jesse',
    imageUrl: `${baseImageUrl}/jesse.jpg`,
    role: 'apprentice',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086003',
    email: 'skyler.white@mail.com',
    name: 'Skyler White',
    username: 'Sky',
    imageUrl: `${baseImageUrl}/sky.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086004',
    email: 'hank.schrader@mail.com',
    name: 'Hank Schrader',
    username: 'Hank',
    imageUrl: `${baseImageUrl}/hank.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086005',
    email: 'marie.schrader@mail.com',
    name: 'Marie Schrader',
    username: 'Marie',
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086006',
    email: 'saul.goodman@mail.com',
    name: 'Saul Goodman',
    username: 'Jimmy',
    imageUrl: `${baseImageUrl}/jimmy.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086007',
    email: 'gustavo.fring@mail.com',
    name: 'Gustavo Fring',
    username: 'Gus',
    imageUrl: `${baseImageUrl}/gus.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086008',
    email: 'michael.ehrmantraut@mail.com',
    name: 'Michael Ehrmantraut',
    username: 'Mike',
    imageUrl: `${baseImageUrl}/mike.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086009',
    email: 'hector.salamanca@mail.com',
    name: 'Hector Salamanca',
    username: 'Tio',
    imageUrl: `${baseImageUrl}/tio.jpg`,
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086010',
    email: 'alberto.salamanca@mail.com',
    name: 'Alberto Salamanca',
    username: 'Tuco',
    role: 'standard',
  },
  {
    id: '1f008731-4645-43de-8af9-3060d4086011',
    email: 'gale.boetticher@mail.com',
    name: 'Gale Boetticher',
    username: 'Captain Nerd',
    role: 'apprentice',
  },
] as const satisfies Users;
