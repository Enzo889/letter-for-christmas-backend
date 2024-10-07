// export class CreateCartDto {}

import { Cart } from '@prisma/client';

export type CreateCartDto = Omit<Cart, 'id' | 'createdAt' | 'updatedAt'>;
