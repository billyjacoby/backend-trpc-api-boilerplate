import { z } from 'zod';

import { UserConfigSchema, mockUsers } from './mockUsers';
export const BatchConfigSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  purity: z.number().min(0).max(100),
  weight: z.number().positive({ message: 'Must be a positive number.' }),
  producers: UserConfigSchema.array(),
  supplier: z.object({ id: z.string(), name: z.string(), description: z.string().nullable() }).nullable(),
});

type Batch = z.infer<typeof BatchConfigSchema>;

export type Batches = ReadonlyArray<Batch>;

export const mockBatches = [
  {
    id: '2f008731-4645-43de-8af9-3060d4086001',
    title: 'Blue Sky',
    description: 'summer batch',
    purity: 99.11,
    weight: 145.64,
    producers: [mockUsers[0], mockUsers[1]],
    supplier: {
      id: '3f008731-4645-43de-8af9-3060d4086001',
      name: 'Golden Moth Chemical',
      description: 'Golden bee company logo.',
    },
  },
  {
    id: '2f008731-4645-43de-8af9-3060d4086002',
    title: 'Blue Sky',
    description: 'bad batch',
    purity: 45.72,
    weight: 142.18,
    producers: [mockUsers[0], mockUsers[1]],
    supplier: {
      id: '3f008731-4645-43de-8af9-3060d4086002',
      name: 'Warehouse',
      description:
        "Lock security guard into portable toilet, don't roll but carry stolen barrel of methylamine, improvise as it goes...",
    },
  },
  {
    id: '2f008731-4645-43de-8af9-3060d4086003',
    title: 'Blue Sky',
    description: null,
    purity: 99.4,
    weight: 149.7,
    producers: [mockUsers[0]],
    supplier: null,
  },
  {
    id: '2f008731-4645-43de-8af9-3060d4086004',
    title: 'Blue Sky',
    description: null,
    purity: 98.64,
    weight: 146.51,
    producers: [mockUsers[1]],
    supplier: null,
  },
] satisfies Batches;
